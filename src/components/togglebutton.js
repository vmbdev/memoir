import React from 'react';
import './togglebutton.css';

const ToggleButton = (props) => {
  return (
    <button className="togglebutton" onClick={ props.handleClose }>
      { props.children }
    </button>
  );
}

export default ToggleButton;