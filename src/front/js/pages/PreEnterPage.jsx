import React, { Component } from 'react';
import '../../../front/styles/PreEnter.css';


class TypingEffect extends Component {
  state = {
    textArrayIndex: 0,
    charIndex: 0,
    typing: false,
    textArray: ["an experience", "fun", "relaxing", "LIFE"],
    typingDelay: 200,
    erasingDelay: 100,
    newTextDelay: 2000
  };

  componentDidMount() {
    this.type();
  }

  type = () => {
    const { textArrayIndex, charIndex, textArray, typingDelay } = this.state;
    if (charIndex < textArray[textArrayIndex].length) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      this.setState({ charIndex: charIndex + 1 });
      setTimeout(this.type, typingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      setTimeout(this.erase, this.state.newTextDelay);
    }
  };

  erase = () => {
    const { textArrayIndex, charIndex, erasingDelay } = this.state;
    if (charIndex > 0) {
      if (!this.cursorSpan.classList.contains("typing")) {
        this.cursorSpan.classList.add("typing");
      }
      this.typedTextSpan.textContent = this.state.textArray[textArrayIndex].substring(0, charIndex - 1);
      this.setState({ charIndex: charIndex - 1 });
      setTimeout(this.erase, erasingDelay);
    } else {
      this.cursorSpan.classList.remove("typing");
      const newIndex = (textArrayIndex + 1) % this.state.textArray.length;
      this.setState({
        textArrayIndex: newIndex,
        charIndex: 0
      });
      setTimeout(this.type, this.state.typingDelay + 1100);
    }
  };

  render() {
    return (

        
        <div className="container-PEP">
        <div className="typing-container-PEP">
          <p>
            Music is <span className="typed-text" ref={(span) => this.typedTextSpan = span}></span>
            <span className="cursor" ref={(span) => this.cursorSpan = span}>&nbsp;</span>
          </p>
        </div>

        <div className="button-container-PEP">
          <p>Continue</p>
        </div>
      </div>
      

       
     

      
    );
  }
}

export default TypingEffect;
