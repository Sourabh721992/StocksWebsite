import React from 'react'

function LabelGeneric(props) {
  return (
      <span style={{fontSize: props.size, borderLeft: props.border, backgroundColor:props.bgColor}} 
        className="text-muted text-overflow font-weight-bold p-1">{props.text}</span>
  )
}


export default LabelGeneric;