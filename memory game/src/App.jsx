import React from 'react';
import './App.css';
import PropTypes from 'prop-types'; // Import PropTypes
import './App.css';

function Square(props) {
  return (
    <div id={props.id} className="square"
      style={{ width: props.width, height: props.width }}
      onClick={() => props.handleSquareClick(props.id)}
    />
  );
}

Square.propTypes = {
  id: PropTypes.number.isRequired,
  width: PropTypes.string.isRequired,
  handleSquareClick: PropTypes.func.isRequired,
};

class Board extends React.Component {
  static propTypes = {
    n: PropTypes.number.isRequired,
    handleSquareClick: PropTypes.func.isRequired,
    playerTurn: PropTypes.bool.isRequired,
    width: PropTypes.string.isRequired,
  };

  createBoardRows() {
    let rows = [];
    let counter = 0;
    for (let i = 0; i < this.props.n; i++) {
      let row = [];
      for (let j = 0; j < this.props.n; j++) {
        row.push(<Square key={counter}
          handleSquareClick={this.props.handleSquareClick}
          id={counter}
          playerTurn={this.props.playerTurn}
          width={this.props.width} />)
        counter++;
      }
      rows.push(row);
    }
    return rows;
  }

  render() {
    const rows = this.createBoardRows();
    let board = [];
    for (let i = 0; i < rows.length; i++) {
      board.push(<div key={i} className="boardRow">{rows[i]}</div>);
    }
    return (
      <div>
        <div className="board">{board}</div>
      </div>

    )
  }
}

function ProgressBarBlock(props) {
  return (
    <div className="progressBarBlock" style={{ width: props.width }}></div>
  );
}

ProgressBarBlock.propTypes = {
  width: PropTypes.string.isRequired,
};

class ProgressBar extends React.Component {
  static propTypes = {
    blockWidth: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { blockWidth: this.props.blockWidth }
  }
  render() {
    return (
      <div id="progressBar" className={"progressBar"}>
        <ProgressBarBlock width={this.props.blockWidth} />
      </div>
    )
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 3, k: 2, playerMoves: 0, gameStarted: false, topScore: 'X', startingRound: 2 };
    this.playerTurn = false;
    this.pattern = [];
  }
  resizeBoard(e) {
    if (this.state.gameStarted) return;
    this.setState({
      n: e.target.value
    })
  }
  handleSquareClick(i) {
    if (!this.playerTurn) return;

    // Player made wrong move.
    if (i !== this.pattern.shift()) {
      alert('GAME OVER');
      this.playerTurn = false;
      this.pattern = [];
      this.setState({ gameStarted: false, k: this.state.startingRound, playerMoves: 0 });
      return;
    }

    if (this.pattern.length === 0) {
      this.setState({ playerMoves: this.state.playerMoves + 1 }, () => {
        setTimeout(() => {
          this.setState({
            playerMoves: 0,
            k: this.state.k + 1,
            topScore: this.state.topScore === 'X' ?
              this.state.k + 1 : (this.state.k + 1 > this.state.topScore ?
                this.state.k + 1 : this.state.topScore)
          }, () => {
            this.startRound();
          });
        }, 1000, this);
      });
    } else {
      this.setState({ playerMoves: this.state.playerMoves + 1 });
    }
  }
  startRound() {
    if (!this.state.gameStarted) {
      this.setState({ gameStarted: true });
    }
    this.playerTurn = false;
    this.pattern = this.pickKRandomSquares(this.state.n, this.state.k);
    this.showSquares(this.pattern);
  }
  changeStartingRound(e) {
    this.setState({
      k: parseInt(e.target.value),
      startingRound: parseInt(e.target.value)
    });
  }
  pickKRandomSquares(n, k) {
    let squares = [];
    for (let i = 0; i < k; i++) {
      squares.push(Math.floor(Math.random() * n * n));
    }
    this.pattern = squares;
    return squares;
  }
  showSquares(ids) {
    if (ids.length === 0) {
      this.playerTurn = true;
      return;
    }
    let el = document.getElementById(ids[0]);
    el.classList.add("highlight");
    setTimeout(() => {
      el.classList.remove("highlight");
      if (ids.length > 0) {
        setTimeout(() => this.showSquares(ids.slice(1)), 500);
      }
    }, 1000);
  }
  render() {
    return (
      <div className="App">

        <div className={this.state.gameStarted ? "inactive" : null}>
          <input type="range" defaultValue={this.state.n} onChange={this.resizeBoard.bind(this)}
            min={2} max={5} disabled={this.state.gameStarted}></input>
          {this.state.n} by {this.state.n} board
        </div>

        <div className={this.state.gameStarted ? "inactive" : null}>
          Starting round:
          <input type="number" value={this.state.startingRound} onChange={this.changeStartingRound.bind(this)}
            min={1} disabled={this.state.gameStarted}></input>
        </div>

        <button onClick={this.startRound.bind(this)} disabled={this.state.gameStarted}>
          <b>PLAY</b>
        </button>

        <div>Top score: <b>{this.state.topScore}</b></div>

        <div>Squares remaining: <b>{this.state.k - this.state.playerMoves}</b></div>

        <ProgressBar
          className={"progressBar"}
          numberOfBlocks={this.state.playerMoves}
          blockWidth={((100 / this.state.k) * this.state.playerMoves).toString() + "%"} />

        <Board n={this.state.n}
          handleSquareClick={this.handleSquareClick.bind(this)}
          playerTurn={this.state.playerTurn}
          width={(80 / this.state.n).toString() + 'vw'} />
      </div>
    );
  }
}

export default App;
