import React from "react";

const Link = props => {
  return (
    <div style={{display: "inline-block", cursor:"pointer"}} onClick={() => props.fun(props.page)}>
      <span style={{color: props.color ? props.color : "#2196f3"}}>{props.children}</span>
    </div>
  )
}

export default Link;