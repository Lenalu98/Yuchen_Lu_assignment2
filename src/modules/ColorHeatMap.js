import React from 'react';
import "../styles/SimulationStyles.css"


const HeatMapLegend = () => {
  const colorStops = [
    { color: 'black', label: 'Active' },
    { color: 'pink', label: '1' },
    { color: 'red', label: '2' },
    { color: 'orange', label: '3' },
    { color: 'yellow', label: '4' },
    { color: 'green', label: '5' },
    { color: 'blue', label: '6' },
    { color: 'indigo', label: '7' },
    { color: 'violet', label: '8' },
    { color: 'purple', label: '9' },
    { color: 'white', label: 'Died Max(10)' }
  ];

  const legendWidth = 600;
  const colorStopWidth = legendWidth / (colorStops.length - 1); 

  const gradientStyle = {
    width: legendWidth + 'px',
    height: '20px',
    background: `linear-gradient(to right, ${colorStops.map((stop) => stop.color).join(', ')})`,
    border: '1px solid grey',
    marginBottom: '10px'
  };

  return (
    <div className="heatmap-legend-container">
      <p>Heatmap Legend:</p>
      <div style={gradientStyle} className="heatmap-gradient"></div>
      <div className="heatmap-labels">
        {colorStops.map((stop, index) => (
          <span key={index} style={{ width: colorStopWidth + 'px', textAlign: 'center' }}>{stop.label}</span>
        ))}
      </div>
    </div>
  );
};

export default HeatMapLegend;


