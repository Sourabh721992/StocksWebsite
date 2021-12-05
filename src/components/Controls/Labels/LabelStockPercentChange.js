import React from 'react'

function LabelStockPercentChange(props) {
  const stockPercentChange = Number(String(props.text).slice(0,-1))
  
  return (
    <span style={{color: stockPercentChange < 0 ? "#b75456" : "#40c226"}}>{props.text}</span>
  )
}

export default LabelStockPercentChange;