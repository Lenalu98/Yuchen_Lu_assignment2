import React from 'react';
import { GridProvider } from '../src/modules/GridContext';
import Grid from '../src/modules/Grid';
import Controls from '../src/modules/Control';
import GridSizeForm from '../src/modules/GridSize';
import LivingCellsCount from '../src/modules/LivingCellsCount';

function App() {
  return (
    <GridProvider>
      <div>
        <h1>Conway's Game of Life</h1>
        <GridSizeForm />
        <Grid />
        <LivingCellsCount />
        <Controls />
      </div>
    </GridProvider>
  );
}

export default App;