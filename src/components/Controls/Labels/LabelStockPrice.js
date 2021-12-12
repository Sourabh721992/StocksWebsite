import React from 'react'
import { BiRupee } from 'react-icons/bi'

function LabelStockPrice(props) {
  return (
      <span className="text-dark">
        <BiRupee style={{marginTop: "-2px"}}></BiRupee>
        {props.text}
      </span>
  )
}

export default LabelStockPrice;