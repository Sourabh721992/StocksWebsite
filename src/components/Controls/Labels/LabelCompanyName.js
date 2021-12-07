import React from 'react'
import ReactTooltip from 'react-tooltip'

function LabelCompanyName(props) {
  return (
    <div>
      <p className="text-muted text-overflow" data-tip data-for={ "labelCompanyNameToolTip" + props.index }>{props.text}</p>
      <ReactTooltip id={ "labelCompanyNameToolTip" + props.index } place="right" effect="solid">
         {props.text}
      </ReactTooltip>
    </div>
  )
}

export default LabelCompanyName;