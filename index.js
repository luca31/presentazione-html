let initializePanels, panelDown, panelUp;

{
  let currentPanel = 0;

  let panels = $(".slider-panel");

  initializePanels = pans => {
    panels[0].scrollIntoView(true)

    gsap.timeline({onComplete:startInteraction})
      .from(panels[0].children, 1, {opacity:0})
      .from($(panels[0]).find(".arrow_down"), .5, {opacity:0, scale:0}, "-=1.5")
      .to($(panels[0]).find(".arrow_down"), .5, {opacity:1, display:"block"});
  }

  let startInteraction = () => {

    panelDown = () => {
      if(currentPanel < panels.length-1){
        const tmp_currentPanel = currentPanel + 1;
        tl = gsap.timeline({onStart:()=>{currentPanel=tmp_currentPanel}, onComplete:checkVideo});
        if(tmp_currentPanel>0) tl.to(".arrow_down, .arrow_up", 0, {display:"block"});
        tl.to(panels[tmp_currentPanel-1].children, .4, {opacity:0})
          .to(panels, .6, {y:-window.innerHeight*tmp_currentPanel, ease:"expo.inOut"}, "-=.4")
          .from(panels[tmp_currentPanel].children, .4, {opacity:0})
          .to(panels[tmp_currentPanel].children, .4, {opacity:1}, "-=.4");
      }
    }
    panelUp = () => {
      if(currentPanel>0){
        const tmp_currentPanel = currentPanel - 1;
        gsap.timeline({onStart:()=>{currentPanel=tmp_currentPanel}, onComplete:checkVideo})
          .to(panels[tmp_currentPanel+1].children, .4, {opacity:0})
          .to(panels, .6, {y:-window.innerHeight*tmp_currentPanel, ease:"expo.inOut"}, "-=.4")
          .from(panels[tmp_currentPanel].children, .4, {opacity:0})
          .to(panels[tmp_currentPanel].children, .4, {opacity:1}, "-=.4");
      }
    }

    let checkVideo = () => {
      $("video").each(function(){$(this).get(0).pause();$(this).get(0).currentTime=0})
      $($(panels[currentPanel]).find("video")).each(function(){$(this).get(0).play();})
    }

    $(window).resize(function(){
      gsap.to(panels, 0, {y:-window.innerHeight*currentPanel})
    });

    $(window).keydown(function(e){
      if (e.keyCode == 38) panelUp();
      else if (e.keyCode == 40) panelDown();
    });

    let ts;
    $(document).bind('touchstart', function (e){
      ts = e.originalEvent.touches[0].clientY;
    });

    $(document).bind('touchend', function (e){
      const te = e.originalEvent.changedTouches[0].clientY;
      if(ts < te - 50) panelUp();
      else if(ts > te + 50) panelDown();
    });

    lastScrollTime = -1500;
    $(document).bind('mousewheel', function(e){
      if(e.timeStamp > lastScrollTime + 1500){
        lastScrollTime = e.timeStamp;
        if(e.originalEvent.wheelDelta > 0) panelUp();
        else if(e.originalEvent.wheelDelta < 0) panelDown();
      }
    });

  }

}