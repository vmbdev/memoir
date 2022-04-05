import { useState } from 'react';
import CloseButton from './closebutton';
import './sidebar.css';

function Sidebar(props) {
  const [visible, setVisibility] = useState(true);

  const getLinksClass = () => {
    return "sidebar__links sidebar__links--state-" + (visible ? "visible" : "hidden");
  }

  return(
    <nav id="sidebar" className="sidebar">
      <div className="sidebar__divider">
        <div className={ getLinksClass() }>
          <ul>
            { props.linkList.map(item => <li key={ item.index }><a href={ "/chapter/" + item.index }>{ item.title }</a></li>) }
          </ul>
          {/*<a href="#close" onClick={ () => setVisibility(!visible) }>Close</a>*/}
        </div>
        <div>
          <CloseButton handleClose={ () => setVisibility(!visible) } />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;