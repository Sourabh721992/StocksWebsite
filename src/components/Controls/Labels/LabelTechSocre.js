import React, {useState, useEffect} from 'react'

function LabelTechSocre(props) {
  const [borderColor, setBorder] = useState("");
  
  useEffect(() => {
    detectBorderColor();
  });

  let detectBorderColor = () => {
    let score = Number(props.text);
    if(score >= 75)
      setBorder("#00ff00");
    else if(score >=50 && score < 75)
      setBorder("#adff2f");
    else if(score >= 25 && score < 50)
      setBorder("#DC143C");
    else if(score < 25)
      setBorder("#880808");
  }
  return (
    <span style={{fontSize: "16px", borderLeft: `3px solid ${borderColor}`, backgroundColor:"#f0fff0"}} 
        className="text-muted text-overflow font-weight-bold p-1">{props.text}</span>
  )
}

export default LabelTechSocre;
