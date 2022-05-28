import React from "react";
import { gsap } from "gsap";

const { useEffect } = React;

const PanelsWrapper = props => {
  const keyDown = e => {
    if (e.keyCode === 38) props.panelUp();
    else if (e.keyCode === 40) props.panelDown();
    else if (e.keyCode === 37 && props.page !== "home") props.changePage("home");
  };

  const resize = () => {
    gsap.to(
      props.panels.current.map((el) => el.current),
      {
        duration:0,
        y:-window.innerHeight*props.currentPanel
      }
    )
  };

  useEffect(() => {
    if(props.panels && props.panels.current && props.panels.current.length>0) {
      let tmp_currentPanel = props.currentPanel;

      if(props.currentPanel === -1) {
        tmp_currentPanel = props.panels.current.findIndex(el => el.current.getBoundingClientRect().top === 0)
        props.setCurrentPanel(tmp_currentPanel);
      } else if(props.currentPanel === 0) {
        gsap.timeline()
          .to(props.panels.current[tmp_currentPanel].current.children, {duration:0, opacity:0, display:"block"})
          .to(props.panels.current[tmp_currentPanel].current.children, {duration:1.5, opacity:1, display:"block"});
      }
    }
  }, [props, props.panels, props.currentPanel])

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("keydown", keyDown);
    }
  })

  return (
    <div>
      {props.children}
    </div>
  )
}

export default PanelsWrapper;