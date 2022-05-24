import { gsap } from "gsap";

const panelUpUtility = (panels, currentPanel, setCurrentPanel) => {
  if(currentPanel>0){
    const tmp_currentPanel = currentPanel - 1;
    gsap.timeline({onComplete:()=>{setCurrentPanel(tmp_currentPanel)}})
      .to(panels.current[tmp_currentPanel+1].current.children, {duration:.4, opacity:0})
      .to(panels.current.map((el) => el.current), {duration:.6, y:-window.innerHeight*tmp_currentPanel, ease:"expo.inOut"}, "-=.4")
      .from(panels.current[tmp_currentPanel].current.children, {duration:.4, opacity:0})
      .to(panels.current[tmp_currentPanel].current.children, {duration:.4, opacity:1}, "-=.4");
  }
}

const panelDownUtility = (panels, currentPanel, setCurrentPanel) => {
  if(currentPanel < panels.current.length-1){
    const tmp_currentPanel = currentPanel + 1;
    const tl = gsap.timeline({onComplete:()=>{setCurrentPanel(tmp_currentPanel)}});
    
    if(tmp_currentPanel>0) tl.to(".arrow_down, .arrow_up", {duration:0, display:"block"});

    tl.to(panels.current[tmp_currentPanel-1].current.children, {duration:.4, opacity:0})
    .to(panels.current.map((el) => el.current), {duration:.6, y:-window.innerHeight*tmp_currentPanel, ease:"expo.inOut"}, "-=.4")
    .from(panels.current[tmp_currentPanel].current.children, {duration:.4, opacity:0})
    .to(panels.current[tmp_currentPanel].current.children, {duration:.4, opacity:1}, "-=.4");
  }
}

export {
  panelUpUtility,
  panelDownUtility
}