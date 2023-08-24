// Enter.jsx
import React, { Component } from 'react';
import '../../../front/styles/Enter.css';

class Enter extends Component {
  state = {
    enterHover: false,
  };

  handleEnterHover = () => {
    this.setState({ enterHover: true });
  };

  handleEnterLeave = () => {
    this.setState({ enterHover: false });
  };

  render() {
    const { enterHover } = this.state;

    return (
      <div className="wrapper">
        <div className="typing-container">
          <div className="typing-demo">
            WELCOME TO HYNPOS.
          </div>
          
          <div className="additional-words1">
            We <span className="red-text">Love</span> Music.
          </div>
          <div className="additional-words2">
            All Day.
          </div>
          <div className="additional-words3">
            Every Day.
          </div>
        </div>
        <div className="additional-words4">
          Press <span id="enter">Enter</span> to Get Started.
        </div>
      </div>
    );
  }
}

export default Enter;
