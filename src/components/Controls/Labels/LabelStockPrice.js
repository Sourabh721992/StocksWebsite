import React from 'react'
import { BiRupee } from 'react-icons/bi'

function LabelStockPrice(props) {
  return (
    // <div>
    //   <p className="text-dark text-overflow" data-tip data-for={ "labelCompanyCodeToolTip" + props.index }>{props.text}</p>
    //   <ReactTooltip id={ "labelCompanyCodeToolTip" + props.index } place="right" effect="solid">
    //     {props.text}
    //   </ReactTooltip>
    // </div>
      <span className="text-dark">
        <BiRupee style={{marginTop: "-2px"}}></BiRupee>
        {props.text}
      </span>
  )
}

export default LabelStockPrice;