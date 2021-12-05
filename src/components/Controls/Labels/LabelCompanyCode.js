import React from 'react'
import ReactTooltip from 'react-tooltip'

function LabelCompanyCode(props) {
  return (
    <div>
      <p className="text-dark text-overflow" data-tip data-for={ "labelCompanyCodeToolTip" + props.index }>{props.text}</p>
      <ReactTooltip id={ "labelCompanyCodeToolTip" + props.index } place="right" effect="solid">
         {props.text}
      </ReactTooltip>
    </div>
  )
}

export default LabelCompanyCode;