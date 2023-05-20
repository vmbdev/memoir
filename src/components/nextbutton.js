import './nextbutton.scss';

const NextButton = (props) => {
  return (
    <button className="nextbutton" onClick={ props.clickHandler }>Siguiente</button>
  );
}

export default NextButton;