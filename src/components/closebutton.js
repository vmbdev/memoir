import React from 'react';
import './closebutton.css';

function CloseButton(props) {

  return(
    <button className="closebutton" onClick={ props.handleClose }>X</button>
  );
}

export default CloseButton;