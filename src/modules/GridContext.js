
import React, { createContext, useState, useEffect } from 'react';

export const GridContext = createContext();

// Function to adjust the density of the grid
//make sure the grid number is 10% of total grid numbers
const adjustDensity = (grid, rows, cols, currentDensity, targetDensity) => {
  let adjustmentsNeeded = Math.abs(currentDensity - targetDensity) * (rows * cols);
  let adjustmentCount = 0;
  while (adjustmentCount < adjustmentsNeeded) {
    for (let x = 0; x < rows && adjustmentCount < adjustmentsNeeded; x++) {
      for (let y = 0; y < cols && adjustmentCount < adjustmentsNeeded; y++) {
        // Randomly select cells to avoid patterns; adjust as needed
        if (Math.random() < 0.1) {
          if (currentDensity < targetDensity && !grid[x][y].isAlive) {
            // If density is too low, try to activate cells
            grid[x][y].isAlive = true;
            adjustmentCount++;
          } else if (currentDensity > targetDensity && grid[x][y].isAlive) {
            // If density is too high, try to deactivate cells
            grid[x][y].isAlive = false;
            adjustmentCount++;
          }
        }
      }
    }
  }
};


// Initializes the grid with random alive/dead cells and iteration count
const createInitialGrid = (rows, cols, clusterCenters = 5, clusterRadius = 3, targetDensity = 0.1) => {
  // Generate cluster centers
  let centers = [];
  for (let i = 0; i < clusterCenters; i++) {
    centers.push({
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    });
  }

  // Function to calculate distance to nearest center
  const distanceToNearestCenter = (x, y) => {
    return centers.reduce((minDistance, center) => {
      const distance = Math.sqrt((center.x - x) ** 2 + (center.y - y) ** 2);
      return distance < minDistance ? distance : minDistance;
    }, Infinity);
  };

  // Initialize grid and count for alive cells
  let grid = [];
  let aliveCount = 0;

  for (let x = 0; x < rows; x++) {
    let row = [];
    for (let y = 0; y < cols; y++) {
      const distance = distanceToNearestCenter(x, y);
      let isAlive = false;
      // Adjust probability based on distance and target density
      //clusting cells
      if (distance <= clusterRadius) {
        isAlive = Math.random() < (targetDensity * 2); // Increase chance within radius
      } else {
        isAlive = Math.random() < targetDensity / 2; // Decrease chance outside radius
      }
      if (isAlive) aliveCount++;
      row.push({ isAlive, iteration: 1 });
    }
    grid.push(row);
  }

  // Check if the density matches the target, adjust density to make sure 10% target.
  let currentDensity = aliveCount / (rows * cols);
  adjustDensity(grid, rows, cols, currentDensity, targetDensity);

  return grid;
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
        aliveNeighbors += grid[nx][ny].isAlive ? 1 : 0;
      }
    }
  }
  return aliveNeighbors;
};

// Updates the grid for the next generation
const nextGeneration = (grid, rows, cols) => {
  return grid.map((row, x) =>
    row.map((cell, y) => {
      const aliveNeighbors = calculateAliveNeighbors(grid, x, y, rows, cols);
      if (cell.isAlive && (aliveNeighbors < 2 || aliveNeighbors > 3)) {
        return { isAlive: false, iteration: 1 }; // Die
      }
      if (!cell.isAlive && aliveNeighbors === 3) {
        return { isAlive: true, iteration: 0 }; // Live
      }
      return { ...cell, iteration: cell.isAlive ? 1 : cell.iteration + 1 }; // Increment iteration if alive
    })
  );
};

const calculateLivingCells = (grid) => {
  return grid.flat().filter(cell => cell.isAlive).length;
};

export const GridProvider = ({ children }) => {
  const [isAutoplaying, setIsAutoplaying] = useState(false);
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(20);
  const [grid, setGrid] = useState(createInitialGrid(rows, cols));
  const [livingCellsCount, setLivingCellsCount] = useState(() => calculateLivingCells(grid));

  useEffect(() => {
    if (isAutoplaying) {
      const interval = setInterval(() => {
        setGrid(prevGrid => nextGeneration(prevGrid, rows, cols));
      }, 100); // updates every 100 milliseconds
      return () => clearInterval(interval); // cleanup on stop or component unmount
    }
  }, [isAutoplaying, rows, cols]);

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
    newGrid[row][col].isAlive = !newGrid[row][col].isAlive;
    newGrid[row][col].iteration = 1; // Reset iteration count
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
    <GridContext.Provider value={{ grid, toggleCellState, updateGrid, resetGrid,
    livingCellsCount, setRows, setCols, toggleAutoplay: () => setIsAutoplaying(!isAutoplaying) }}>
      {children}
    </GridContext.Provider>
  );
};