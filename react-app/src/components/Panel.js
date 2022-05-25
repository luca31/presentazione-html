import React from "react";

const Panel = React.forwardRef((props, ref) => {
  return (
    <div className={"slider-panel valign-wrapper row " + props.className} style={props.style} ref={ref}>
      {
        props.panelUp ? <div className="arrow_up"><i onClick={props.panelUp} className="material-icons medium">keyboard_arrow_up</i></div> : ""
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