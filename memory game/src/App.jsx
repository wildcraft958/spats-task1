import React from 'react'; // Import React library to use its features
import './App.css'; // Import CSS file for styling
import PropTypes from 'prop-types'; // Import PropTypes library for type checking

function Square(props) { // Define a functional component called Square
  return (
    <div id={props.id} className="square" // Render a div element with id and class name
      style={{ width: props.width, height: props.width }} // Set the width and height style based on props
      onClick={() => props.handleSquareClick(props.id)} // Set onClick event handler
    />
  );
}

Square.propTypes = { // Define PropTypes for Square component
  id: PropTypes.number.isRequired, // id prop must be a number and is required
  width: PropTypes.string.isRequired, // width prop must be a string and is required
  handleSquareClick: PropTypes.func.isRequired, // handleSquareClick prop must be a function and is required
};

class Board extends React.Component { // Define a class component called Board
  static propTypes = { // Define PropTypes for Board component
    n: PropTypes.number.isRequired, // n prop must be a number and is required
    handleSquareClick: PropTypes.func.isRequired, // handleSquareClick prop must be a function and is required
    playerTurn: PropTypes.bool.isRequired, // playerTurn prop must be a boolean and is required
    width: PropTypes.string.isRequired, // width prop must be a string and is required
  };

  createBoardRows() { // Define a method to create rows for the game board
    let rows = []; // Initialize an empty array for rows
    let counter = 0; // Initialize a counter variable
    for (let i = 0; i < this.props.n; i++) { // Loop through rows based on n prop
      let row = []; // Initialize an empty array for each row
      for (let j = 0; j < this.props.n; j++) { // Loop through columns based on n prop
        row.push(<Square key={counter} // Push a Square component to the row array with key, handleSquareClick, id, playerTurn, and width props
          handleSquareClick={this.props.handleSquareClick}
          id={counter}
          playerTurn={this.props.playerTurn}
          width={this.props.width} />)
        counter++; // Increment counter
      }
      rows.push(row); // Push the row array to the rows array
    }
    return rows; // Return the rows array
  }

  render() { // Define the render method for Board component
    const rows = this.createBoardRows(); // Create rows for the game board
    let board = []; // Initialize an empty array for the board
    for (let i = 0; i < rows.length; i++) { // Loop through rows
      board.push(<div key={i} className="boardRow">{rows[i]}</div>); // Push a div element to the board array with key and class name
    }
    return (
      <div>
        <div className="board">{board}</div> {/*Render the board*/}
      </div>
    )
  }
}

function ProgressBarBlock(props) { // Define a functional component called ProgressBarBlock
  return (
    <div className="progressBarBlock" style={{ width: props.width }}></div> // Render a div element with class name and style based on props
  );
}

ProgressBarBlock.propTypes = { // Define PropTypes for ProgressBarBlock component
  width: PropTypes.string.isRequired, // width prop must be a string and is required
};

class ProgressBar extends React.Component { // Define a class component called ProgressBar
  static propTypes = { // Define PropTypes for ProgressBar component
    blockWidth: PropTypes.string.isRequired, // blockWidth prop must be a string and is required
  };

  constructor(props) { // Initialize the state in the constructor
    super(props); // Call the constructor of the parent class
    this.state = { blockWidth: this.props.blockWidth } // Set the initial state with blockWidth prop
  }
  render() { // Define the render method for ProgressBar component
    return (
      <div id="progressBar" className={"progressBar"}> {/*Render a div element with id and class name*/}
        <ProgressBarBlock width={this.props.blockWidth} /> {/*Render ProgressBarBlock component with width prop*/}
      </div>
    )
  }
}

class App extends React.Component { // Define a class component called App
  constructor(props) { // Initialize the state in the constructor
    super(props); // Call the constructor of the parent class
    this.state = { n: 3, k: 2, playerMoves: 0, gameStarted: false, topScore: 'X', startingRound: 2 }; // Set the initial state
    this.playerTurn = false; // Initialize playerTurn variable
    this.pattern = []; // Initialize pattern array
  }
  resizeBoard(e) { // Define a method to resize the game board
    if (this.state.gameStarted) return; // If the game has started, return
    this.setState({ // Update the state with the new board size
      n: e.target.value
    })
  }
  handleSquareClick(i) { // Define a method to handle square clicks
    if (!this.playerTurn) return; // If it's not the player's turn, return

    // Player made wrong move.
    if (i !== this.pattern.shift()) { // If the clicked square is not the correct one
      alert('GAME OVER'); // Show a game over alert
      this.playerTurn = false; // Set playerTurn to false
      this.pattern = []; // Reset the pattern
      this.setState({ gameStarted: false, k: this.state.startingRound, playerMoves: 0 }); // Reset the game
      return;
    }

    if (this.pattern.length === 0) { // If the player has completed the pattern
      this.setState({ playerMoves: this.state.playerMoves + 1 }, () => { // Update playerMoves state
        setTimeout(() => { // Delay the next round start
          this.setState({
            playerMoves: 0,
            k: this.state.k + 1,
            topScore: this.state.topScore === 'X' ? this.state.k + 1 : (this.state.k + 1 > this.state.topScore ? this.state.k + 1 : this.state.topScore)
          }, () => {
            this.startRound(); // Start the next round
          });
        }, 1000, this);
      });
    } else {
      this.setState({ playerMoves: this.state.playerMoves + 1 }); // Increment playerMoves
    }
  }
  startRound() { // Define a method to start a new round
    if (!this.state.gameStarted) { // If the game hasn't started yet
      this.setState({ gameStarted: true }); // Start the game
    }
    this.playerTurn = false; // Set playerTurn to false
    this.pattern = this.pickKRandomSquares(this.state.n, this.state.k); // Generate a new pattern
    this.showSquares(this.pattern); // Show the pattern to the player
  }
  changeStartingRound(e) { // Define a method to change the starting round
    this.setState({ // Update the starting round state
      k: parseInt(e.target

.value),
      startingRound: parseInt(e.target.value)
    });
  }
  pickKRandomSquares(n, k) { // Define a method to pick k random squares
    let squares = []; // Initialize an array for the squares
    for (let i = 0; i < k; i++) { // Loop k times
      squares.push(Math.floor(Math.random() * n * n)); // Generate a random square and push it to the array
    }
    this.pattern = squares; // Update the pattern
    return squares; // Return the array of squares
  }
  showSquares(ids) { // Define a method to show the squares to the player
    if (ids.length === 0) { // If there are no squares left to show
      this.playerTurn = true; // Set playerTurn to true
      return;
    }
    let el = document.getElementById(ids[0]); // Get the element with the id of the first square
    el.classList.add("highlight"); // Add a highlight class to the square
    setTimeout(() => { // Delay the removal of the highlight class
      el.classList.remove("highlight"); // Remove the highlight class
      if (ids.length > 0) { // If there are more squares to show
        setTimeout(() => this.showSquares(ids.slice(1)), 500); // Show the next square after a delay
      }
    }, 1000);
  }
  render() { // Define the render method for App component
    return (
      <div className="App"> {/* Render the main div container for the app*/}

        <div className={this.state.gameStarted ? "inactive" : null}> {/* Render a div for the board size selection*/}
          <input type="range" defaultValue={this.state.n} onChange={this.resizeBoard.bind(this)}
            min={2} max={5} disabled={this.state.gameStarted}></input> {/*Render a range input for board size selection*/}
          {this.state.n} by {this.state.n} board {/*Render the selected board size*/}
        </div>

        <div className={this.state.gameStarted ? "inactive" : null}> {/*Render a div for the starting round selection*/}
          Starting round:
          <input type="number" value={this.state.startingRound} onChange={this.changeStartingRound.bind(this)}
            min={1} disabled={this.state.gameStarted}></input> {/*Render a number input for starting round selection*/}
        </div>

        <button onClick={this.startRound.bind(this)} disabled={this.state.gameStarted}> {/* Render a button to start the game*/}
        <b>PLAY</b> {/*Render the text inside the button */}
        </button>

        <div>Top score: <b>{this.state.topScore}</b></div>  {/*Render the top score*/}

        <div>Squares remaining: <b>{this.state.k - this.state.playerMoves}</b></div> {/* Render the remaining squares*/}

        <ProgressBar // Render the progress bar
          className={"progressBar"}
          numberOfBlocks={this.state.playerMoves}
          blockWidth={((100 / this.state.k) * this.state.playerMoves).toString() + "%"} />

        <Board n={this.state.n} // Render the game board
          handleSquareClick={this.handleSquareClick.bind(this)}
          playerTurn={this.state.playerTurn}
          width={(80 / this.state.n).toString() + 'vw'} />
      </div>
    );
  }
}

export default App; // Export the App component as the default export