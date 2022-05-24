import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";
import Link from "../components/Link";

const { useRef, useState } = React;

const Aviazione = props => {
  const panels = useRef([0,0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif", background:"-webkit-linear-gradient(45deg, #00b0ff, #e040fb)", backgroundClip:"text", WebkitBackgroundClip:"text", textFillColor:"transparent", WebkitTextFillColor:"transparent"}}>Come l'IA sta rivoluzionando<br />l'industria aeronautica</h1>
          <Link fun={props.changePage} page="home" color="#fff">...torna indietro</Link>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[1]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Come ormai noto da tempo con le autovetture autonome, L'AI sta rivoluzionando nuovamente il settore dei trasporti così è anche per il settore aeronautico, dove l'AI viene utilizzata per:
            Co-piloti virtuali, gestione e pianificazione del traffico aereo, sicurezza, ottimizzazione delle rotte e dei consumi, manutenzione preventiva e miglioramento della customer experience.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[2]} panelUp={panelUp}>
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

export default Aviazione;
