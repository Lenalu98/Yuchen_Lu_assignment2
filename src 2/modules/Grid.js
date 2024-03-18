import React, { useContext } from 'react';
import { GridContext } from './GridContext';
import Cell from './Cell';

function Grid() {
  const { grid } = useContext(GridContext);

  return (
    <div style={{ display: 'inline-block' }}>
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((cell, colIndex) => (
            <Cell key={`${rowIndex}-${colIndex}`} row={rowIndex} col={colIndex} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Grid;

