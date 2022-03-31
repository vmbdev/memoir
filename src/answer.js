import './answer.css';
import React from 'react';

class Answer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = { text: "Mostrar" };
  }
  
  render() {
    return(
      <div className="answer" onClick={() => this.handleClick()}>
          {this.state.text}
      </div>
    );
  }
  
  handleClick() {
    this.setState({ text: this.props.text });
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text)
      this.setState({ text: "Mostrar" });
  }
}

export default Answer;