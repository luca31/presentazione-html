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

      <Panel className="black white-text" ref={panels.current[2]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>CO-Pilota virtuale</h3>
          <p>Oggi Airbus sta testando sistemi totalmente automatici basati sull'image recognition in grado di far decollare in completa autonomia. Nel test in questione, i piloti hanno attivato già l'auto-pilota durante la fase di allineamento alla pista di decollo, e si sono dovuti limitare a muovere le manette dell'aereo.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[3]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <p>Mentre buona parte della tecnologia esistente si basa sulla ILS (Instrument Landing System), questo decollo automatico si è basato esclusivamente su tecnologia di riconoscimento di immagini, questo si pone come base di un ulteriore cambiamento di paradigma per quanto riguarda il settore dei trasporti.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[4]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Sicurezza</h3>
          <p>La maggiore attenzione è proprio sulla sicurezza: i sistemi basati sull'AI possono aiutare a risolvere o ridurre i problemi legati al controllo del traffico aereo, alla manutenzione del veicolo, alla gestione delle risorse nella cabina di pilotaggio riducendo notevolmente il rischio di un errore umano.</p>
        </div>
      </Panel>

      <Panel className="black white-text" ref={panels.current[5]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Traffico aereo</h3>
          <p>L'intelligenza artificiale è inoltre già utilizzata nella gestione del traffico aereo. La gestione del traffico aereo è uno degli aspetti più importanti per garantire la sicurezza. In questo, l’AI può aiutare nella pianificazione del traffico aereo includendo migliori previsioni di eventuali problematiche. L'AI con questo compito può inevitabilmente anche aiutare a ridurre i ritardi e gli sprechi di carburante.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[6]} panelDown={panelDown} panelUp={panelUp}>
        <div className="col s10 offset-s1 m8 offset-m2 l6 offset-l3">
          <h3>Manutenzione</h3>
          <p>Infine, l'AI può anche essere utilizzata per ottimizzare la gestione della manutenzione di un aeromobile, analizzando dati delle condizioni tecniche in tempo reale e segnalando autonomamente elementi da ripararare o sostituire. Non solo, l'AI può prevedere l'erosione o la rottura di alcuni pezzi, potenzialmente evitando tragedie o comunque risparmiando danni maggiori alla compagnia aerea.</p>
        </div>
      </Panel>

      <Panel className="grey lighten-2 dark-text" ref={panels.current[7]} panelUp={panelUp}>
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
