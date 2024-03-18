import React from 'react';
import { GridProvider } from '../modules/GridContext';
import Grid from '../modules/Grid';
import Controls from '../modules/Control';
import GridSizeForm from '../modules/GridSize';
import LivingCellsCount from '../modules/LivingCellsCount';
import HeatMapLegend from '../modules/ColorHeatMap';
import "../styles/SimulationStyles.css"

const SimulationPage = () => {
  return (
    <GridProvider>
      <div className="simulation-container">
        <h1 className="simulation-header">Conway's Game of Life</h1>
        <GridSizeForm />
        <Grid />
        <LivingCellsCount />
        <Controls />
        <HeatMapLegend />
      </div>
    </GridProvider>
  );
};

export default SimulationPage;