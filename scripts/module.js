Hooks.on("renderPause", (app, html, options) => {
    if (options.paused) {
     html.find("img")[0].src = ("./modules/coriolis-kbender-ui/data/images/coriolis-shield.png");
    }
  });
