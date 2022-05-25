import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Treni = props => {
  const panels = useRef([0,0,0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif", background:"-webkit-linear-gradient(45deg, #00b0ff, #e040fb)", backgroundClip:"text", WebkitBackgroundClip:"text", textFillColor:"transparent", WebkitTextFillColor:"transparent"}}>Intelligenza artificiale e<br />il sistema ferroviario</h1>
          <Link fun={props.changePage} page="home" color="#fff">...torna indietro</Link>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[1]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>L'IA sta portando un cambio di paradigma anche per quanto riguarda il trasporto ferroviario:
tecnologie avanzate come Internet of Things, Cloud Computing, Big Data e Beidou Satellite Positioning System, sviluppando allo stesso tempo treni intelligenti ad alta velocità.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[2]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Nuovi treni ad alta velocità si servono dell'ia per il controllo ed un supporto alla guida come: controllo di trazione, di comando, sia per quanto riguarda comunicazione e sicurezza.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[3]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Inoltre L'IA è utilizzata per altre funzioni non direttamente connessi alla guida, ma volti a migliorare l'esperienza collettiva di viaggiatori e operatori, come ad esempio il conteggio automatico dei passeggeri o la raccolta di dati per migliorare le esperienze fornite ai viaggiatori.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[4]} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>About us</h3>
          <p>
            Alessandro Negro<br />
            Luca Colli
          </p>
          <Link fun={props.changePage} page="home">...torna indietro</Link>
        </div>
      </Panel>
    </PanelsWrapper>
  );
}

export default Treni;
