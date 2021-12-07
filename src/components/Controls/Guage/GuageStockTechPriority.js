import React from 'react'
import GaugeChart from 'react-gauge-chart'

function GuageStockTechPriority(props) {
  return (
    <GaugeChart id="gauge-chart3" 
                nrOfLevels={30} 
                colors={["#FF5F6D", "#FFC371"]} 
                arcWidth={0.3} 
                percent={ (Number(props.score)/100).toFixed(2) }
                textColor="#345243" 
    />
  //   <GaugeChart id="gauge-chart3" 
  //   nrOfLevels={30} 
  //   colors={["#FF5F6D", "#FFC371"]} 
  //   arcWidth={0.3} 
  //   percent={ (props.score/100).toFixed(2) }
  // />
  )
}

export default GuageStockTechPriority
