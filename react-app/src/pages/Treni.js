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
    <PanelsWrapper page={props.page} changePage={props.changePage} panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" style={{background: `linear-gradient(45deg,  rgb(0 176 255 / 85%), rgb(224 64 251 / 85%)), url(${require("../images/treni.jpeg")})`, backgroundSize: "cover"}} ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif"}}>L'Intelligenza Artificiale e<br />il Sistema Ferroviario</h1>
          <Link fun={props.changePage} color="#fff" page="home">
            <div style={{display: "flex", alignItems:"center"}}>
              <i className="material-icons medium">chevron_left</i>
              Torna indietro
            </div>
          </Link>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[1]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>L'IA sta portando a un forte cambio di rotta anche per quanto riguarda il trasporto ferroviario: grazie a essa sono state create tecnologie avanzate come l'Internet of Things, il Cloud Computing, i Big Data e il Beidou Satellite Positioning System, sviluppando allo stesso tempo treni intelligenti ad alta velocità.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[2]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>I nuovi treni ad alta velocità si servono, dunque, dell'intelligenza artificiale per garantire un controllo e un supporto alla guida. Alcune tecnologie degne di nota sono controllo di trazione, controllo di comando e strumentazioni di comunicazione e sicurezza.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[3]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>L'intelligenza artificiale è, inoltre, utilizzata per altre funzioni non direttamente connessi alla guida, ma volte a migliorare l'esperienza collettiva di viaggiatori e operatori, come ad esempio il conteggio automatico dei passeggeri o la raccolta di dati. Tramite l'utilizzo di tutte queste innovazioni ci si pone lo scopo di migliorare l'esperienza di viaggio fornita ai passeggeri.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[4]} panelUp={panelUp}>
        <div className="col s5 offset-s3">
          <h3>About us</h3>
          <p>
            Alessandro Negro<br />
            Luca Colli
          </p>
        </div>
        <div className="col s3 pull-s1">
          <Link fun={props.changePage} color="#fff" page="home">
            <div style={{display: "flex", alignItems:"center"}}>
              <i className="material-icons medium">chevron_left</i>
              Torna indietro
            </div>
          </Link>
        </div>
      </Panel>
    </PanelsWrapper>
  );
}

export default Treni;
