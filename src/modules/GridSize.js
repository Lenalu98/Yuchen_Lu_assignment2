import React, { useState, useContext } from 'react';
import { GridContext } from './GridContext';

function GridSizeForm() {
  const { setRows, setCols } = useContext(GridContext);
  const [height, setHeight] = useState(20);
  const [width, setWidth] = useState(20);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height < 3 || height > 40 || width < 3 || width > 40) {
      setError('Please enter values in the range of 3-40.');
      return;
    }
    setError('');
    setRows(height);
    setCols(width);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Height:
        <input type="number" value={height} onChange={e => setHeight(Number(e.target.value))} />
      </label>
      <label>
        Width:
        <input type="number" value={width} onChange={e => setWidth(Number(e.target.value))} />
      </label>
      <button type="submit">Update Grid Size</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </form>
  );
}

export default GridSizeForm;
