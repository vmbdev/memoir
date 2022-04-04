import './nextbutton.css';

function NextButton(props) {
  return(
    <button className="nextbutton" onClick={ props.clickHandler }>Siguiente</button>
  );
}

export default NextButton;