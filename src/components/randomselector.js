import React from 'react'

const RandomSelector = (props) => {
  return (
    <div>
      <input type="checkbox" id="random" defaultChecked={ props.active } onChange={ props.randomToggleChanged } />
      <label htmlFor="random">Aleatorio</label>
    </div>
  );
}

export default RandomSelector;