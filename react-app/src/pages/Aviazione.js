import React from "react";

import PanelsWrapper from "../components/PanelsWrapper";
import Panel from "../components/Panel";
import Link from "../components/Link";

import { panelUpUtility, panelDownUtility } from "../utilities/movePanels";

const { useRef, useState } = React;

const Aviazione = props => {
  const panels = useRef([0,0,0,0,0,0,0,0].map(() => React.createRef()))
  const [ currentPanel, setCurrentPanel ] = useState(-1);

  const panelUp = () => panelUpUtility(panels, currentPanel, setCurrentPanel)
  const panelDown = () => panelDownUtility(panels, currentPanel, setCurrentPanel)

  return (
    <PanelsWrapper page={props.page} changePage={props.changePage} panels={panels} panelUp={panelUp} panelDown={panelDown} currentPanel={currentPanel} setCurrentPanel={setCurrentPanel}>
      <Panel className="black white-text" style={{background: `linear-gradient(45deg,  rgb(0 176 255 / 85%), rgb(224 64 251 / 85%)), url(${require("../images/aviazione.webp")})`, backgroundSize: "cover"}} ref={panels.current[0]} panelDown={panelDown}>
        <div className="center" style={{width:"100%"}}>
          <h1 style={{fontFamily: "Poppins, sans-serif"}}>Come l'IA sta rivoluzionando<br />l'Industria Aeronautica</h1>
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
          <p>Come ormai noto da tempo, con l'ideazione delle autovetture autonome l'AI sta fortemente rivoluzionando il settore dei trasporti. Un processo del tutto analogo è avvenuto anche per il settore aeronautico, in cui l'AI viene utilizzata per:
            co-piloti virtuali, gestione e pianificazione del traffico aereo, sicurezza, ottimizzazione delle rotte e dei consumi, manutenzione preventiva e miglioramento della customer experience.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[2]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>CO-Pilota virtuale</h3>
          <p>Airbus ha recentemente testato dei sistemi totalmente automatici basati sull'image recognition, in grado di far decollare il velivolo in completa autonomia. Nel test in questione, i piloti avevano attivato l'auto-pilot già a partire dalla fase di allineamento alla pista di decollo e si sono limitati a muovere le manette dell'aereo lasciando, quindi, il pieno controllo della traiettoria ai meccanismi di intelligenza artificiale.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[3]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Mentre buona parte della tecnologia esistente si basa sulla ILS (Instrument Landing System), questo decollo automatico si è basato esclusivamente su tecnologia di riconoscimento di immagini ponendo, dunque, le base a un ulteriore cambiamento di paradigma per quanto riguarda il settore dei trasporti.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[4]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Sicurezza</h3>
          <p>Si prospettano notevoli vantaggi nel campo della sicurezza: i sistemi basati sull'intelligenza artificiale possono aiutare a risolvere i problemi legati al controllo del traffico aereo, alla manutenzione del veicolo o alla gestione delle risorse nella cabina di pilotaggio, riducendo notevolmente il rischio di un errore umano.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[5]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Traffico aereo</h3>
          <p>L'intelligenza artificiale è già utilizzata da alcuni anni per la gestione del traffico aereo che, come detto precedentemente, è uno degli aspetti cruciali per garantire la sicurezza dei passeggeri. Infatti, l’AI può aiutare nella pianificazione del traffico aereo tramite l'introduzione di previsioni accurati di eventuali problematiche. In questo modo diventa, inoltre, possibile ridurre i ritardi e gli sprechi di carburante.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[6]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Manutenzione</h3>
          <p>Infine, l'AI può anche essere utilizzata per ottimizzare la gestione della manutenzione di un aeromobile, analizzando i dati delle condizioni tecniche in tempo reale e segnalando autonomamente eventuali elementi danneggiati. Non solo: l'AI può prevedere l'erosione o la rottura di alcuni pezzi, evitando potenzialmente lo svolgersi di tragedie o, comunque, riducendo l'entità dei danni legali o morali subiti dalla compagnia aerea.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[7]} panelUp={panelUp}>
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

export default Aviazione;
