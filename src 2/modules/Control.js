import React, { useContext } from 'react';
import { GridContext } from './GridContext';

function Controls() {
  const { updateGrid, resetGrid } = useContext(GridContext);

  return (
    <div>
      <button onClick={updateGrid}>Next Generation</button>
      <button onClick={resetGrid}>Reset Grid</button>
    </div>
  );
}

export default Controls;
