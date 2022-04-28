import React, { useState } from 'react';
import ToggleButton from './togglebutton.js';
import './sidebar.css';

const Sidebar = (props) => {
  const [visible, setVisibility] = useState(false);

  return (
    <nav className="sidebar">
      <div className={ "sidebar__divider sidebar__divider--state-" + (visible ? "visible" : "hidden") }>
        { props.children }
      </div>
      <div>
        <ToggleButton handleClose={ () => setVisibility(!visible) }>
          { visible ? "\u2716" : "\u2630" }
        </ToggleButton>
      </div>
    </nav>
  );
}

export default Sidebar;