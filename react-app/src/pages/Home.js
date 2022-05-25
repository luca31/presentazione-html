import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Home = props => {
  const panels = useRef([0,0,0,0,0].map(() => React.createRef()))
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
        <div className="col s5 offset-s1">
          <p>L'Intelligenza Artificiale è soggetto di studi e sviluppi sempre più approfonditi e costanti:</p>
          <p>Da un punto di vista qualitativo, diventando sempre più efficace, precisa e, appunto, intelligente;</p>
          <p>Da un punto di vista quantitativo, entrando a far parte sempre di più nelle nostre vite quotidiane.</p>
        </div>
        <img className="grey white-text darken-4 col s3 pull-s1" style={{borderRadius:20, padding:20}} src={require("../images/icona-ai.png")} alt="Intelligenza Artificiale" />
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[2]} panelUp={panelUp} panelDown={panelDown}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Questo ingresso nella vita di tutti giorni sta portando ad un cambio di paradigma in molte delle attività che svolgiamo regolarmente rivoluzionando, ad esempio, il nostro modo di spostarci ed i mezzi di trasporto che utilizziamo. L'industria del trasporto e le sue trasformazioni hanno profondamente influenzato la storia umana, oltre ad essere la “vetrina” del suo progresso tecnologico.</p>
        </div>
      </Panel>
      
      <Panel className="black white-text" ref={panels.current[3]} panelUp={panelUp} panelDown={panelDown}>
        <div className="col s5 offset-s1">
          <span>
            <h3>L'intelligenza artificiale<br />e le sue applicazioni</h3>
          </span>
        </div>
        <div className="grey darken-4 col s4 pull-s1 left-align" style={{borderRadius:20, padding:20}}>
          Approfondisci:<br /><br />
          <Link fun={props.changePage} color="#fff" page={"etica"}>&nbsp;•&nbsp;&nbsp;Etica</Link><br />
          <Link fun={props.changePage} color="#fff" page={"treni"}>&nbsp;•&nbsp;&nbsp;Sistema ferroviario</Link><br />
          <Link fun={props.changePage} color="#fff" page={"aviazione"}>&nbsp;•&nbsp;&nbsp;Aviazione</Link>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[4]} panelUp={panelUp}>
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
