import React from 'react';
import './Button.css';

function Button(props) {
  return (
    <button className="btn" type="button">
      <strong>{props.text}</strong>
      <div id="container-stars">
        <div id="stars"></div>
      </div>

      <div id="glow">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </button>
  );
}

export default Button;