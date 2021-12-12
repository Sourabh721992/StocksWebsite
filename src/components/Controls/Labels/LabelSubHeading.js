import React from 'react'
import ReactTooltip from 'react-tooltip'

function LabelSubHeading(props) {
  return (
      <div style={{fontSize: "13px"}} className="text-muted text-overflow font-weight-bold" data-tip data-for={props.id + "ToolTip" + props.index }>
        {props.text}
        <ReactTooltip id={ props.id + "ToolTip" + props.index } place="bottom" effect="solid">
          {props.toolTip}
        </ReactTooltip>
      </div>
  )
}

export default LabelSubHeading
