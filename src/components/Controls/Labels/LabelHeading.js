import React from 'react'

function LabelHeading(props) {
  return (
    <span className="text-dark">{String(props.text).trim()}</span>
  )
}

export default LabelHeading;