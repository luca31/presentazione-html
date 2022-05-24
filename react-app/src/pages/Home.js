import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Home = props => {
  const panels = useRef([0,0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif", background:"-webkit-linear-gradient(45deg, #00b0ff, #e040fb)", backgroundClip:"text", WebkitBackgroundClip:"text", textFillColor:"transparent", WebkitTextFillColor:"transparent"}}>Cambio di Paradigma:<br />AI e trasporti</h1>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[1]} panelUp={panelUp} panelDown={panelDown}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Introduzione su cambio di paradigma e intelligenza artificiale</p>
        </div>
      </Panel>
      
      <Panel className="black white-text" ref={panels.current[2]} panelUp={panelUp} panelDown={panelDown}>
        <div className="col s4 offset-s1">
          <span>
            <h3>Intelligenza Artificiale e applicazioni</h3>
          </span>
        </div>
        <div className="grey darken-4 col s5 pull-s1 left-align" style={{borderRadius:20,padding:20}}>
          Cos'è l'Intelligenza artificiale<br />
          Etica (Fichte)<br />
          Treni (victorian age)<br />
          <Link fun={props.changePage} page={"aviazione"}>Aviazione (cambio di paradigma nella guerra)</Link>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[3]} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>About us</h3>
          <p>
            Alessandro Negro<br />
            Luca Colli
          </p>
        </div>
      </Panel>
    </PanelsWrapper>
  );
}

export default Home;
