import React, { createContext, useState, useEffect } from 'react';

export const GridContext = createContext();

// Initializes the grid with random alive/dead cells
const createInitialGrid = (rows, cols) => {
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => Math.random() < 0.05 ? 1 : 0)
    );
  };

// Calculate the number of alive neighbors for a given cell
const calculateAliveNeighbors = (grid, x, y, rows, cols) => {
    let aliveNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const nx = x + i;
        const ny = y + j;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
          aliveNeighbors += grid[nx][ny];
        }
      }
    }
    return aliveNeighbors;
  };

// Updates the grid for the next generation
const nextGeneration = (grid, rows, cols) => {
    return grid.map((row, x) => row.map((cell, y) => {
      const aliveNeighbors = calculateAliveNeighbors(grid, x, y, rows, cols);
      if (cell === 1 && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        //die
        return 0;
      }
      if (cell === 0 && aliveNeighbors === 3) {
        //live
        return 1;
      }
      return cell;
    }));
  };
const calculateLivingCells = (grid) => {
    return grid.flat().filter(cell => cell === 1).length;
  };

export const GridProvider = ({ children }) => {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [grid, setGrid] = useState(createInitialGrid(rows, cols));
  const [livingCellsCount, setLivingCellsCount] = useState(() => calculateLivingCells(grid));

  useEffect(() => {
     // Recreate the grid when rows or cols change
    setGrid(createInitialGrid(rows, cols));
  }, [rows, cols]);

  useEffect(() => {
    // re-calculate the living cells count
    setLivingCellsCount(calculateLivingCells(grid));
  }, [grid]);

  const toggleCellState = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = grid[row][col] ? 0 : 1;
    setGrid(newGrid);
  };

  const updateGrid = () => {
    setGrid(prevGrid => nextGeneration(prevGrid, rows, cols));
  };

  // reset grid
  const resetGrid = () => {
    setGrid(createInitialGrid(rows, cols));
  };

  return (
    <GridContext.Provider value={{ grid, toggleCellState, updateGrid, resetGrid, livingCellsCount, setRows, setCols }}>
      {children}
    </GridContext.Provider>
  );
};
