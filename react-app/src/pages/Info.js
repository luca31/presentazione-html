import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Info = props => {
  const panels = useRef([0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper page={props.page} changePage={props.changePage} panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="grey lighten-2 dark-text" ref={panels.current[0]} panelDown={panelDown}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Informazioni</h3>
          <p>Per navigare all'interno del sito web è possibile cliccare sulle frecce visualizzate a schermo o, in alternativa, utilizzare i tasti freccia della propria tastiera.</p>
          <div className="center" style={{paddingTop: 20}}>
            <Link fun={props.changePage} color="rgba(0,0,0,0.87)" page="home">
              <div style={{display: "flex", alignItems:"center"}}>
                <i className="material-icons medium">chevron_left</i>
                Torna indietro
              </div>
            </Link>
          </div>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[1]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Risorse utilizzate</h3>
          <p>Le immagini presenti all'interno di questo sito sono state ricavate da <a href={"https://www.pexels.com"} target={"_blank"} rel="noreferrer">Pexels</a>.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[2]} panelUp={panelUp}>
        <div className="col s5 offset-s3">
          <h3>About us</h3>
          <p>
            Alessandro Negro<br />
            Luca Colli
          </p>
        </div>
        <div className="col s3 pull-s1">
          <Link fun={props.changePage} color="#rgba(0,0,0,0.87)" page="home">
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

export default Info;
