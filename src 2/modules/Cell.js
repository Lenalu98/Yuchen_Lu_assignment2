import React, { useContext } from 'react';
import { GridContext } from './GridContext';

function Cell({ row, col }) {
  const { grid, toggleCellState } = useContext(GridContext);
  const isAlive = grid[row][col] === 1;

  return (
    <div
      onClick={() => toggleCellState(row, col)}
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: isAlive ? 'black' : 'white',
        border: '1px solid grey',
        display: 'inline-block',
      }}
    ></div>
  );
}

export default Cell;
