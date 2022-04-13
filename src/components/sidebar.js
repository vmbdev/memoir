import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import CloseButton from './closebutton.js';
import Version from './version.js'
import './sidebar.css';

const Sidebar = (props) => {
  const [visible, setVisibility] = useState(false);

  const getLinksClass = () => {
    return "sidebar__linkdivider sidebar__linkdivider--state-" + (visible ? "visible" : "hidden");
  }

  return(
    <nav id="sidebar" className="sidebar">
      <div className="sidebar__divider">
        <div className={ getLinksClass() }>
          <ul className="sidebar__links">
            { props.linkList.map(item => <li key={ item.index }><Link to={ "/chapter/" + item.index }>{ item.title }</Link></li>) }
          </ul>
          <Version />
        </div>
        <div>
          <CloseButton handleClose={ () => setVisibility(!visible) } />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;