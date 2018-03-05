import React from 'react';
import downloadGraph from 'save-svg-as-png';

const Button = () => {

  const handleClick = (e) => {
    downloadGraph.saveSvgAsPng(document.getElementsByClassName("recharts-surface")[0], "chart.png");
  }
  return (
    <button onClick={handleClick}> Download </button>
  )
}

export default Button
