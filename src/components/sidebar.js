import React, { useEffect } from 'react';
import ToggleButton from './togglebutton.js';
import './sidebar.css';

const Sidebar = ({visible, setVisibility, children}) => {
  useEffect(() => {
    setVisibility(!!visible);
  }, [visible, setVisibility]);

  return (
    <nav className="sidebar">
      <div className={ "sidebar__divider sidebar__divider--state-" + (visible ? "visible" : "hidden") }>
        { children }
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