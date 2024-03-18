import React, { useContext } from 'react';
import { GridContext } from './GridContext';

function Controls() {
  const { updateGrid, resetGrid, toggleAutoplay } = useContext(GridContext);

  return (
    <div>
      <button onClick={updateGrid}>Next Generation</button>
      <button onClick={resetGrid}>Reset Grid</button>
      <button onClick={toggleAutoplay}>Autoplay / Stop</button>
    </div>
  );
}

export default Controls;
