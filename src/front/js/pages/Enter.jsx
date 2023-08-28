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
      <div className="wrapper-E">
        <div className="typing-container-E">
          <div className="typing-demo-E">
            WELCOME TO HYNPOS.
          </div>
          
          <div className="additional-words1-E">
            We <span className="red-text">Love</span> Music.
          </div>
          <div className="additional-words2-E">
            All Day.
          </div>
          <div className="additional-words3-E">
            Every Day.
          </div>
        </div>

        <div className="additional-words4-E">
          Press <span id="enter-E">Enter</span> to Get Started.
        </div>
       
      </div>
    );
  }
}

export default Enter;