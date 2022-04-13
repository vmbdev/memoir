import React from 'react';
import './closebutton.css';

const CloseButton = (props) => {

  return(
    <button className="closebutton" onClick={ props.handleClose }>X</button>
  );
}

export default CloseButton;