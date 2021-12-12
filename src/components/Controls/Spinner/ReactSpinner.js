import React from 'react'
import BeatLoader from 'react-spinners/BeatLoader';

function ReactSpinner(props) {
  return (
    <div  className="spinner">
      <BeatLoader color="#708090" loading={props.loading}  size={25} />
    </div>
  )
}


export default ReactSpinner;
