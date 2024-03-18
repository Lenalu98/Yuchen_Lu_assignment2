import React, { useContext } from 'react';
import { GridContext } from './GridContext';

function LivingCellsCount() {
  const { livingCellsCount } = useContext(GridContext);

  return (
    <div>Living Cells: {livingCellsCount}</div>
  );
}

export default LivingCellsCount;
