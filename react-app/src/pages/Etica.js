import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Treni = props => {
  const panels = useRef([0,0,0,0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper page={props.page} changePage={props.changePage} panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" style={{background: `linear-gradient(45deg,  rgb(0 176 255 / 85%), rgb(224 64 251 / 85%)), url(${require("../images/etica.webp")})`, backgroundSize: "cover"}} ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif"}}>L'Intelligenza Artificiale e<br />l'Etica</h1>
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
          <p>Quando si parla di Intelligenza Artificiale e di implementazione di questa nella nostra quotidianità, viene spontaneo interrogarsi sugli effetti causati alle nostre vite anche da un punto di vista etico.</p>
          <p>Verranno ora proposti alcuni temi che non avranno come scopo quello di fornire una risposta oggettiva e assoluta alla questione etica, quanto piuttosto quello di essere utilizzati come spunti di riflessione individuale.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[2]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Di chi è il controllo?</h3>
          <p>La prima domanda etica che viene naturale porsi è: di chi è il controllo? L'implementazione di sistemi a guida autonoma sia per quanto riguarda le automobili sia per quanto riguarda i co-piloti automatici dei velivoli  ha fatto sorgere il dubbio riguardo a chi appartenga effettivamente il controllo. L'uomo ha ancora il controllo sulla macchina oppure, affidandosi troppo a questa, rischia di farle prendere il sopravvento?</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[3]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Supporto o sostituzione?</h3>
          <p>Viene ora naturale porsi la domanda: quale dovrebbe essere il ruolo dell'IA? Dovrebbe essere solo un supporto all'attività umana o sostituirsi a essa? Fino a quando si tratta solo di attività di supporto i problemi etici che ci si pone sono piuttosto limitati: esiste il rischio di deskilling? I sistemi intelligenti sono sicuri? Il discorso diventa, tuttavia, più complesso introducendo il concetto di sostituzione totale dell'attività umana: come cambierebbe il mondo del lavoro? È corretto affidare le nostre vite ad una macchina senza che vi sia comunque un umano che la supervisioni?</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[4]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Rischio deskilling?</h3>
          <p>Occorre, infine, puntualizzare che cos'è effettivamente il rischio di deskilling. Si tratta del rischio che macchinari innovativi in grado di svolgere compiti al posto nostro rendano l'uomo sempre più incapace di compiere determinati compiti, ossia che in futuro non saremo più in grado di svolgere questi determinati compiti qualora se ne verificasse la necessità.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[5]} panelUp={panelUp}>
        <div className="col s5 offset-s3">
          <h3>About us</h3>
          <p>
            Alessandro Negro<br />
            Luca Colli
          </p>
        </div>
        <div className="col s3 pull-s1">
          <Link fun={props.changePage} color="rgba(0,0,0,0.87)" page="home">
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