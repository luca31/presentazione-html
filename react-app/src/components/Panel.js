import React from "react";

import Link from "./Link";

const Panel = React.forwardRef((props, ref) => {
  return (
    <div className={"slider-panel valign-wrapper row " + props.className} style={props.style} ref={ref}>
      {
        props.panelUp ? <div className="arrow_up"><i onClick={props.panelUp} className="material-icons medium">keyboard_arrow_up</i></div> : ""
      }
      {
        props.info && !props.panelUp ? <div className="info"><Link fun={props.info} color="#fff" page={"info"}><div style={{display: "flex", padding:10, alignItems:"center", fontSize:".8em"}}><i className="material-icons small">info</i>&nbsp;info</div></Link></div> : ""
      }
      {
        props.children
      }
      {
        props.panelDown ? <div className="arrow_down"><i onClick={props.panelDown} className="material-icons medium">keyboard_arrow_down</i></div> : ""
      }
    </div>
  )
})

export default Panel;