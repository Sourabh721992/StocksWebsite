import React, {useState, useEffect} from 'react'

function LabelStrength(props) {
  const [borderColor, setBorder] = useState("");
  
  useEffect(() => {
    detectBorderColor();
  });

  let detectBorderColor = () => {
    let text = String(props.text).trim().toLowerCase();
    if(text === "very strong")
      setBorder("#00ff00");
    else if(text === "strong")
      setBorder("#adff2f");
    else if(text === "weak")
      setBorder("#DC143C");
    else if(text === "very weak")
      setBorder("#880808");
  }
  return (
      <span style={{fontSize: "16px", borderLeft: `3px solid ${borderColor}`, backgroundColor:"#f0fff0"}} 
        className="text-muted text-overflow font-weight-bold p-1">{props.text}</span>
  )
}


export default LabelStrength;