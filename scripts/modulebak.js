/*
Hooks.on('renderPause', (_app, html, options) => {
	// Hooks.on('pauseGame', (_app, html, options) => {
	document.getElementById('pause').innerHTML = `<img src=\"systems/alienrpg/images/paused-alien.png\" class=\"fa-spin\"><figcaption>GAME PAUSED</figcaption>`;
});

  Initialize Module
*/


Hooks.on("init", () => {
  game.settings.register("coriolis-kbender-ui", "UIVersions", {
    name: "Imported Compendiums",
    scope: "world",
    config: false,
    type: Boolean,
    default: false,
  });
})


/*
Hooks.on("init", () => {
  game.settings.register("coriolis-kbender-ui", "UIVersion", {
    name: "Please select the UI version",
    hint: "In this package you can find multiple User Interface versions, you can choose one by using the dropdown above",
    scope: "world",
    config: true,
    type: String,
    choices: {
      glass: "Algolan glass",
      mira: "Mirran green",
      zenith: "Zenithian steel",
      core: "Coriolis default"
    }//,
 //   default: glass
  });
});


Hooks.once('ready', async () => {
	//let r = document.querySelector(':root');
	//r.style.setProperty('--color-coriolis-header1:', game.settings.get('coriolis-kbender-ui', 'fontColour'));
  //miran greentheme
  if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='mira') {

    document.documentElement.style.setProperty('--color-coriolis-header1', 'rgba(0,0,0,0.8)');
    document.documentElement.style.setProperty('--image-coriolis-journal-sidebar', `url("icons/background_header.webp")`);  ;
    document.documentElement.style.setProperty('--image-coriolis-header', `url("icons/background_header.webp")`);
  	};
  //replicating the default look, simplyfying color coding
  if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='core') {

    document.documentElement.style.setProperty('--image-coriolis-background-char', `url("../../../systems/yzecoriolis/css/images/char-sheet-bg.jpg")`);  
    document.documentElement.style.setProperty('--image-coriolis-header', `url("icons/image_placeholder.webp")`);

  	};
  }
);


*/