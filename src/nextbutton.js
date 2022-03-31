import React from 'react';
import './nextbutton.css';

class NextButton extends React.Component {
  render() {
    return(
      <button className="nextbutton" onClick={ this.props.clickHandler }>Siguiente</button>
    );
  }
}

export default NextButton;