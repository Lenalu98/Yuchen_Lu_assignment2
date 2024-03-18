import React, { useContext } from 'react';
import { GridContext } from './GridContext';

function Cell({ row, col }) {
  const { grid, toggleCellState } = useContext(GridContext);
  const { iteration, isAlive } = grid[row][col];

  // Define the color based on the iteration count
  const getColor = (iteration, isAlive) => {
    if (isAlive) return 'black'; // If alive, color is black
    //dead iterations
    if (iteration === 1) return 'pink';
    else if (iteration === 2) return 'orange';
    else if (iteration === 3) return 'yellow';
    else if (iteration === 4) return 'green';
    else if (iteration === 5) return 'blue';
    else if (iteration === 6) return 'indigo';
    else if (iteration === 7) return 'violet';
    else if (iteration === 8) return 'purple';
    else return 'white'; // Maximum iteration reached
  };

  const color = getColor(iteration, isAlive);

  return (
    <div
      onClick={() => toggleCellState(row, col)}
      style={{
        width: '20px',
        height: '20px',
        backgroundColor: color,
        border: '1px solid grey',
        display: 'inline-block',
      }}
    ></div>
  );
}

export default Cell;
