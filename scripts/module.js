
Hooks.on("init", () => {
  game.settings.register("coriolis-kbender-ui", "UIVersion", {
    name: "Please select the UI version",
    hint: "In this package you can find multiple User Interface versions, you can choose one by using the dropdown above",
    scope: "world",
    config: true,
    type: String,
    choices: {
      glass: "Algolan glass",
      green: "Mirran green",
      gold: "Sadaal gold",
  //    zenith: "Zenithian steel",
      core: "Coriolis default"
    },
    default: "glass",
    requiresReload: true
  })
}
);

Hooks.once('ready', async () => {
  //glassy Algol theme
  // ##  #    #   #   #
  // # # #   # # # # # #
  // ### ### # #  #   #
	 if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='glass') {
  document.documentElement.style.setProperty('--color-coriolis-header1', ' rgba(0,0,0,0.9)');
  document.documentElement.style.setProperty('--color-coriolis-header2', ' rgba(0,0,0,0.7)');
  document.documentElement.style.setProperty('--color-coriolis-background1', ' rgba(0,0,0,0.5)');
  document.documentElement.style.setProperty('--color-coriolis-background2', ' rgba(0,0,0,0.3)');
  document.documentElement.style.setProperty('--color-coriolis-text', ' #875a2f');
  document.documentElement.style.setProperty('--color-coriolis-text-secondary', ' #b38e69');
  document.documentElement.style.setProperty('--color-coriolis-text-details', ' #bead9b');

  document.documentElement.style.setProperty('--image-coriolis-dice', ` url("icons/dice.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str', ` url("icons/attribute_strength_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str-thumb', ` url("icons/attribute_strength_20.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi', ` url("icons/attribute_agility_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi-thumb', ` url("icons/attribute_agility_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit', ` url("icons/attribute_wits_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit-thumb', ` url("icons/attribute_wits_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp', ` url("icons/attribute_empathy_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp-thumb', ` url("icons/attribute_empathy_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-dice1', ` url("css/images/dice-1.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice2', ` url("css/images/dice-2.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice3', ` url("css/images/dice-3.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice4', ` url("css/images/dice-4.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice5', ` url("css/images/dice-5.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice6', ` url("css/images/dice-6.png")`);
  document.documentElement.style.setProperty('--image-coriolis-drop-down-arrow', ` url("icons/drop-down-arrow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-roll-grow', ` url("icons/roll-glow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-darkness-point-add', `url("icons/darkness-point-add.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-rolling-dices', `  url("icons/dice.webp")`); 
  document.documentElement.style.setProperty('--image-coriolis-checkbox', ` url("icons/checkbox-unchecked.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-header', ` url("icons/background_header.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background', ` url("icons/image_placeholder.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-journal-sidebar', `url("icons/background_header.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-default-background', ` url("icons/image_placeholder.webp")`);
  document.documentElement.style.setProperty('--image-chat-message', ` url("icons/image_placeholder.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-char', ` url("icons/image_placeholder.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-ship', ` url("icons/image_placeholder.webp")`);

  document.documentElement.style.setProperty('--color-chat-message-text', ' #875a2f');
  document.documentElement.style.setProperty('--color-chat-header-text', ' #b38e69');
  document.documentElement.style.setProperty('--color-chat-light-text', ' #bead9b');
  document.documentElement.style.setProperty('--color-chat-message-border', ' #b38e69');
  document.documentElement.style.setProperty('--color-entity-color', ' black');
  document.documentElement.style.setProperty('--color-chat-button-text', ' #875a2f');

  document.documentElement.style.setProperty('--color-coriolis-blue1', ' #bead9b'); //character sheet icons
  document.documentElement.style.setProperty('--color-coriolis-blue4', ' green'); 
  document.documentElement.style.setProperty('--color-coriolis-blue6', ' #bead9b'); //character sheet headers
  document.documentElement.style.setProperty('--color-coriolis-blue2', ' rgba(0,0,0,0.5)'); // character sheet attributes backgrounds and notes background
  document.documentElement.style.setProperty('--color-coriolis-blue3', ' rgba(0,0,0,0.3)');  //character sheet attributes group box background
  document.documentElement.style.setProperty('--color-coriolis-blue5', ' rgba(0,0,0,0.8)');   //charsheet headers
  document.documentElement.style.setProperty('--color-coriolis-blue7', ' rgba(0,0,0,0.8)'); //charsheet ship position dropdown background
  document.documentElement.style.setProperty('--color-coriolis-white', ' white');
  document.documentElement.style.setProperty('--color-coriolis-gray1', ' #e5e5e5');
  document.documentElement.style.setProperty('--color-coriolis-gray2', '  rgba(0,0,0,0.8)'); // used for ship boarders
  document.documentElement.style.setProperty('--color-coriolis-placeholder', 'SILVER');
  document.documentElement.style.setProperty('--color-coriolis-orange1', ' #b38e69');  //critical injuries, items, talents
  document.documentElement.style.setProperty('--color-coriolis-yellow1', ' #875a2f'); //CHARACTER NAME ETC
  document.documentElement.style.setProperty('--color-coriolis-black', ' black');
  document.documentElement.style.setProperty('--color-coriolis-flicker', ' rgb(135,90,47,0.5)');
  document.documentElement.style.setProperty('--color-coriolis-gear-equiped-blue-hoover', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-notes-edit-hoover', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-crew-roll-hoover-number', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-ship-module-toggle', '  #bf0909');
  document.documentElement.style.setProperty('--color-coriolis-ship-button-enable-hoover', ' #875a2f');
  document.documentElement.style.setProperty('--color-coriolis-numeric-input', '  #7a7971');
  document.documentElement.style.setProperty('--color-coriolis-success-critical', 'green');
  document.documentElement.style.setProperty('--color-coriolis-success-limited', ' greenyellow');
  document.documentElement.style.setProperty('--color-coriolis-success-failure', ' red');
  document.documentElement.style.setProperty('--color-coriolis-push', ' #bead9b');
  document.documentElement.style.setProperty('--color-coriolis-input-text', ' #bbb'); //item and options text input
  document.documentElement.style.setProperty('--color-coriolis-encumbrance-bar',' rgba(0,0,0,0.9)'); 


  document.documentElement.style.setProperty('--color-coriolis-item-boarder1', ' #aaa');
  document.documentElement.style.setProperty('--color-coriolis-item-boarder2', '#bbb');

  document.documentElement.style.setProperty('--color-coriolis-attr-block', 'transparent');
  /*coriolis core rulebook journals*/
  document.documentElement.style.setProperty('--color-coriolis-core-text',' black');
  document.documentElement.style.setProperty('--color-coriolis-core-sidetext',' silver');

  document.documentElement.style.setProperty('--color-coriolis-chat-background1','rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background2','rgba(0,0,0,0.6)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background3','rgba(0,0,0,0.4)');

  document.documentElement.style.setProperty('--color-select-box','black');

  /*red colors unifcation*/
 document.documentElement.style.setProperty('--color-coriolis-red','red');
 document.documentElement.style.setProperty('--color-coriolis-red1','red');
 document.documentElement.style.setProperty('--color-coriolis-red2','red');

/*hp increase unification*/
 document.documentElement.style.setProperty('--color-coriolis-ship-hp-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-hp-hoover-to-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-ship-bar-segment',' #40bf22');

/*misc increase unifcation*/
 document.documentElement.style.setProperty('--color-coriolis-increase-enable',  ' #b38e69'); //radiation bar AND ship enable module button 
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-increase',' #bead9b');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-increase','#875a2f');

 document.documentElement.style.setProperty('--color-coriolis-ship-ep-increase',' #71c0ec');
 document.documentElement.style.setProperty('--color-coriolis-mind-points-increase',' #71c0ec');

  /*interactive character sheet bars decrease colors unifaction*/
 document.documentElement.style.setProperty('--color-coriolis-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-hoover-to-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-radiation-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-ep-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-mind-bar-decrease',' black');

 
};
  // ##  ### #   ##
  // # # # # #   # #
  // ### ### ### ##   
  
    //Sadaal mask gold
	 if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='gold') {
  document.documentElement.style.setProperty('--color-coriolis-header1', ' rgba(0,0,0,0.9)');
  document.documentElement.style.setProperty('--color-coriolis-header2', ' rgba(0,0,0,0.7)');
  document.documentElement.style.setProperty('--color-coriolis-background1', ' rgba(0,0,0,0.5)');
  document.documentElement.style.setProperty('--color-coriolis-background2', ' rgba(0,0,0,0.3)');
  document.documentElement.style.setProperty('--color-coriolis-text', ' #875a2f');
  document.documentElement.style.setProperty('--color-coriolis-text-secondary', ' #b38e69');
  document.documentElement.style.setProperty('--color-coriolis-text-details', ' #bead9b');

  document.documentElement.style.setProperty('--image-coriolis-dice', ` url("icons/dice.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str', ` url("icons/attribute_strength_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str-thumb', ` url("icons/attribute_strength_20.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi', ` url("icons/attribute_agility_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi-thumb', ` url("icons/attribute_agility_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit', ` url("icons/attribute_wits_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit-thumb', ` url("icons/attribute_wits_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp', ` url("icons/attribute_empathy_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp-thumb', ` url("icons/attribute_empathy_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-dice1', ` url("css/images/dice-1.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice2', ` url("css/images/dice-2.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice3', ` url("css/images/dice-3.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice4', ` url("css/images/dice-4.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice5', ` url("css/images/dice-5.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice6', ` url("css/images/dice-6.png")`);
  document.documentElement.style.setProperty('--image-coriolis-drop-down-arrow', ` url("icons/drop-down-arrow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-roll-grow', ` url("icons/roll-glow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-darkness-point-add', `url("icons/darkness-point-add.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-rolling-dices', `  url("icons/dice.webp")`); 
  document.documentElement.style.setProperty('--image-coriolis-checkbox', ` url("icons/checkbox-unchecked.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-header', ` url("icons/back-gold-header.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background', ` url("icons/background_saadaal.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-journal-sidebar', `url("icons/background_header.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-default-background', ` url("icons/background_saadaal.webp")`);
  document.documentElement.style.setProperty('--image-chat-message', ` url("icons/background_saadaal.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-char', ` url("icons/background_saadaal.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-ship', ` url("icons/background_saadaal.webp")`);

  document.documentElement.style.setProperty('--color-chat-message-text', ' #875a2f');
  document.documentElement.style.setProperty('--color-chat-header-text', ' #b38e69');
  document.documentElement.style.setProperty('--color-chat-light-text', ' #cebdaaff');
  document.documentElement.style.setProperty('--color-chat-message-border', ' #b38e69');
  document.documentElement.style.setProperty('--color-entity-color', ' black');
  document.documentElement.style.setProperty('--color-chat-button-text', ' #875a2f');

  document.documentElement.style.setProperty('--color-coriolis-blue1', ' #bead9b'); //character sheet icons
  document.documentElement.style.setProperty('--color-coriolis-blue4', ' green'); 
  document.documentElement.style.setProperty('--color-coriolis-blue6', ' #bead9b'); //character sheet headers
  document.documentElement.style.setProperty('--color-coriolis-blue2', ' rgba(0,0,0,0.5)'); // character sheet attributes backgrounds and notes background
  document.documentElement.style.setProperty('--color-coriolis-blue3', ' rgba(0,0,0,0.7)');  //character sheet attributes group box background
  document.documentElement.style.setProperty('--color-coriolis-blue5', ' rgba(0,0,0,0.2)');   //charsheet headers
  document.documentElement.style.setProperty('--color-coriolis-blue7', ' rgba(0,0,0,0.8)'); //charsheet ship position dropdown background
  document.documentElement.style.setProperty('--color-coriolis-white', ' white');
  document.documentElement.style.setProperty('--color-coriolis-gray1', ' #e5e5e5');
  document.documentElement.style.setProperty('--color-coriolis-gray2', '  rgba(0,0,0,0.8)'); // used for ship boarders
  document.documentElement.style.setProperty('--color-coriolis-placeholder', 'SILVER');
  document.documentElement.style.setProperty('--color-coriolis-orange1', ' #b38e69');  //critical injuries, items, talents
  document.documentElement.style.setProperty('--color-coriolis-yellow1', ' #875a2f'); //CHARACTER NAME ETC
  document.documentElement.style.setProperty('--color-coriolis-black', ' black');
  document.documentElement.style.setProperty('--color-coriolis-flicker', ' rgb(135,90,47,0.5)');
  document.documentElement.style.setProperty('--color-coriolis-gear-equiped-blue-hoover', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-notes-edit-hoover', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-crew-roll-hoover-number', ' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-ship-module-toggle', '  #bf0909');
  document.documentElement.style.setProperty('--color-coriolis-ship-button-enable-hoover', ' #875a2f');
  document.documentElement.style.setProperty('--color-coriolis-numeric-input', '  #7a7971');
  document.documentElement.style.setProperty('--color-coriolis-success-critical', 'green');
  document.documentElement.style.setProperty('--color-coriolis-success-limited', ' greenyellow');
  document.documentElement.style.setProperty('--color-coriolis-success-failure', ' red');
  document.documentElement.style.setProperty('--color-coriolis-push', ' #bead9b');
  document.documentElement.style.setProperty('--color-coriolis-input-text', ' #bbb'); //item and options text input
  document.documentElement.style.setProperty('--color-coriolis-encumbrance-bar',' rgba(0,0,0,0.9)'); 


  document.documentElement.style.setProperty('--color-coriolis-item-boarder1', ' #aaa');
  document.documentElement.style.setProperty('--color-coriolis-item-boarder2', '#bbb');

  document.documentElement.style.setProperty('--color-coriolis-attr-block', 'transparent');
  /*coriolis core rulebook journals*/
  document.documentElement.style.setProperty('--color-coriolis-core-text',' black');
  document.documentElement.style.setProperty('--color-coriolis-core-sidetext',' silver');

  document.documentElement.style.setProperty('--color-coriolis-chat-background1','rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background2','rgba(0,0,0,0.6)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background3','rgba(0,0,0,0.4)');

  document.documentElement.style.setProperty('--color-select-box','black');

  /*red colors unifcation*/
 document.documentElement.style.setProperty('--color-coriolis-red','red');
 document.documentElement.style.setProperty('--color-coriolis-red1','red');
 document.documentElement.style.setProperty('--color-coriolis-red2','red');

/*hp increase unification*/
 document.documentElement.style.setProperty('--color-coriolis-ship-hp-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-hp-hoover-to-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-ship-bar-segment',' #40bf22');

/*misc increase unifcation*/
 document.documentElement.style.setProperty('--color-coriolis-increase-enable',  ' #b38e69'); //radiation bar AND ship enable module button 
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-increase',' #bead9b');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-increase','#875a2f');

 document.documentElement.style.setProperty('--color-coriolis-ship-ep-increase',' #71c0ec');
 document.documentElement.style.setProperty('--color-coriolis-mind-points-increase',' #71c0ec');

  /*interactive character sheet bars decrease colors unifaction*/
 document.documentElement.style.setProperty('--color-coriolis-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-hoover-to-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-radiation-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-ep-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-mind-bar-decrease',' black');

 
};
  // ##  ##  ### ### #
  // # # # # ##  ##  ###
  // ### # # ### ### # #  
  
  

    //Mirran green
	 if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='green') {
  document.documentElement.style.setProperty('--color-coriolis-header1', ' rgba(8, 19, 9, 0.7)');
  document.documentElement.style.setProperty('--color-coriolis-header2', ' rgba(8, 19, 9, 0.5)');
  document.documentElement.style.setProperty('--color-coriolis-background1', ' rgba(8, 19, 9,0.3)');
  document.documentElement.style.setProperty('--color-coriolis-background2', ' rgba(8, 19, 9,0.0)');
  document.documentElement.style.setProperty('--color-coriolis-text', ' #1a533cff');
  document.documentElement.style.setProperty('--color-coriolis-text-secondary', ' #69b385ff');
  document.documentElement.style.setProperty('--color-coriolis-text-details', ' #b7d1c2ff');//9bbeaaff

  document.documentElement.style.setProperty('--image-coriolis-dice', ` url("icons/dice.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str', ` url("icons/attribute_strength_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str-thumb', ` url("icons/attribute_strength_mira_20.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi', ` url("icons/attribute_agility_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi-thumb', ` url("icons/attribute_agility_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit', ` url("icons/attribute_wits_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit-thumb', ` url("icons/attribute_wits_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp', ` url("icons/attribute_empathy_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp-thumb', ` url("icons/attribute_empathy_mira_128.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-dice1', ` url("css/images/dice-1.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice2', ` url("css/images/dice-2.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice3', ` url("css/images/dice-3.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice4', ` url("css/images/dice-4.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice5', ` url("css/images/dice-5.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice6', ` url("css/images/dice-6.png")`);
  document.documentElement.style.setProperty('--image-coriolis-drop-down-arrow', ` url("icons/drop-down-arrow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-roll-grow', ` url("icons/roll-glow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-darkness-point-add', `url("icons/darkness-point-add.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-rolling-dices', `  url("icons/dice.webp")`); 
  document.documentElement.style.setProperty('--image-coriolis-checkbox', ` url("icons/checkbox-unchecked.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-header', ` url("icons/background_marble_green.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background', ` url("icons/background_marble_white.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-journal-sidebar', `url("icons/background_marble_green.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-default-background', ` url("icons/background_marble_white_chat.webp")`);
  document.documentElement.style.setProperty('--image-chat-message', ` url("icons/background_marble_white_chat.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-char', ` url("icons/background_marble_white.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-ship', ` url("icons/background_marble_white.webp")`);

  document.documentElement.style.setProperty('--color-chat-message-text', ' #1a533cff');
  document.documentElement.style.setProperty('--color-chat-header-text', ' #0d3626ff');
  document.documentElement.style.setProperty('--color-chat-light-text', ' #9bbeaaff');
  document.documentElement.style.setProperty('--color-chat-message-border', ' #3f8b5cff');
  document.documentElement.style.setProperty('--color-entity-color', ' black');
  document.documentElement.style.setProperty('--color-chat-button-text', ' #0a271bff');

  document.documentElement.style.setProperty('--color-coriolis-chat-background1','rgba(8, 19, 9,0.3)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background2','rgba(8, 19, 9,0.5)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background3','rgba(8, 19, 9,0.0)');

  document.documentElement.style.setProperty('--color-coriolis-blue1', ' #9bbeaaff'); //character sheet icons
  document.documentElement.style.setProperty('--color-coriolis-blue4', ' green'); 
  document.documentElement.style.setProperty('--color-coriolis-blue6', ' #ecfdf7ff'); //character sheet headers #1a533cff
  document.documentElement.style.setProperty('--color-coriolis-blue2', ' rgba(8, 19, 9, 0.5)'); // character sheet attributes backgrounds and notes background
  document.documentElement.style.setProperty('--color-coriolis-blue3', ' rgba(8, 19, 9,0.5)');  //character sheet attributes group box background
  document.documentElement.style.setProperty('--color-coriolis-blue5', ' rgba(8, 19, 9,0.2)');   //charsheet headers
  document.documentElement.style.setProperty('--color-coriolis-blue7', ' rgba(8, 19, 9,0.8)'); //charsheet ship position dropdown background
  document.documentElement.style.setProperty('--color-coriolis-white', ' white');
  document.documentElement.style.setProperty('--color-coriolis-gray1', ' #e5e5e5');
  document.documentElement.style.setProperty('--color-coriolis-gray2', '  rgba(8, 19, 9,0.8)'); // used for ship boarders
  document.documentElement.style.setProperty('--color-coriolis-placeholder', ' #1a533cff');
  document.documentElement.style.setProperty('--color-coriolis-orange1', ' #69b385ff');  //critical injuries, items, talents
  document.documentElement.style.setProperty('--color-coriolis-yellow1', ' #3e705cff'); //CHARACTER NAME ETC
  document.documentElement.style.setProperty('--color-coriolis-black', ' black');
  document.documentElement.style.setProperty('--color-coriolis-flicker', ' rgba(27, 85, 58, 0.5)');
  document.documentElement.style.setProperty('--color-coriolis-gear-equiped-blue-hoover', ' rgba(8, 19, 9,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-notes-edit-hoover', ' rgba(8, 19, 9,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-crew-roll-hoover-number', ' rgba(8, 19, 9,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-ship-module-toggle', '  #bf0909');//ship module turned off
  document.documentElement.style.setProperty('--color-coriolis-ship-button-enable-hoover', ' #1a533cff');
  document.documentElement.style.setProperty('--color-coriolis-numeric-input', '  #4d584dff');
  document.documentElement.style.setProperty('--color-coriolis-success-critical', 'green');
  document.documentElement.style.setProperty('--color-coriolis-success-limited', ' greenyellow');
  document.documentElement.style.setProperty('--color-coriolis-success-failure', ' red');
  document.documentElement.style.setProperty('--color-coriolis-push', ' #9bbeaaff');
  document.documentElement.style.setProperty('--color-coriolis-input-text', ' #369b73ff'); //item and options text input
  document.documentElement.style.setProperty('--color-coriolis-encumbrance-bar',' rgba(8, 19, 9,0.9)'); 


  document.documentElement.style.setProperty('--color-coriolis-item-boarder1', ' #aaa');
  document.documentElement.style.setProperty('--color-coriolis-item-boarder2', '#bbb');

  document.documentElement.style.setProperty('--color-coriolis-attr-block', 'transparent');
  /*coriolis core rulebook journals*/
  document.documentElement.style.setProperty('--color-coriolis-core-text',' black');
  document.documentElement.style.setProperty('--color-coriolis-core-sidetext',' silver');


  document.documentElement.style.setProperty('--color-select-box','white');

  /*red colors unifcation*/ 
 document.documentElement.style.setProperty('--color-coriolis-red','red');
 document.documentElement.style.setProperty('--color-coriolis-red1','red');
 document.documentElement.style.setProperty('--color-coriolis-red2','white'); //char sheet skill roll highlight

/*hp increase unification*/
 document.documentElement.style.setProperty('--color-coriolis-ship-hp-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-hp-hoover-to-increase',' #40bf22');
 document.documentElement.style.setProperty('--color-coriolis-ship-bar-segment',' #40bf22');

/*misc increase unifcation*/
 document.documentElement.style.setProperty('--color-coriolis-increase-enable',  ' #69b385ff'); //radiation bar AND ship enable module button 
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-increase',' #9bbeaaff');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-increase','#1a533cff');

 document.documentElement.style.setProperty('--color-coriolis-ship-ep-increase',' #71c0ec');
 document.documentElement.style.setProperty('--color-coriolis-mind-points-increase',' #71c0ec');

  /*interactive character sheet bars decrease colors unifaction*/
 document.documentElement.style.setProperty('--color-coriolis-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-hoover-to-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-xp-hoover-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-radiation-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-ship-ep-decrease',' black');
 document.documentElement.style.setProperty('--color-coriolis-mind-bar-decrease',' black');

 
};


  //  ## #    #   #   #  #  ##
  // #   #   # # # # # # # #
  //  ## ### # #  #   #  #  ##


  //replicating the default look, simplyfying color coding
  if (game.settings.get('coriolis-kbender-ui', 'UIVersion')=='core') {

  document.documentElement.style.setProperty('--color-coriolis-header1',' rgba(0,0,0,0.8)');
  document.documentElement.style.setProperty('--color-coriolis-header2',' rgba(0,0,0,0.6)');
  document.documentElement.style.setProperty('--color-coriolis-background1',' rgba(0, 0, 0, 0.35)');
  document.documentElement.style.setProperty('--color-coriolis-background2',' rgba(0, 0, 0, 0.25)');
  document.documentElement.style.setProperty('--color-coriolis-text',' #875a2f');
  document.documentElement.style.setProperty('--color-coriolis-text-secondary',' #b38e69');
  document.documentElement.style.setProperty('--color-coriolis-text-details',' #bead9b');

  document.documentElement.style.setProperty('--image-coriolis-dice', ` url("icons/rolling-dices.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str', ` url("icons/icon-strength-bg.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-str-thumb', ` url("icons/skill-tag-strength.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi', ` url(".icons/icon-agility-bg.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-agi-thumb', ` url("icons/skill-tag-agility.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit', ` url("icons/icon-wits-bg.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-wit-thumb', ` url("icons/skill-tag-wits.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp', ` url("./icons/icon-empathy-bg.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-att-emp-thumb', `url("icons/skill-tag-empathy.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-dice1', ` url("css/images/dice-1.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice2', ` url("css/images/dice-2.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice3', ` url("css/images/dice-3.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice4', ` url("css/images/dice-4.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice5', ` url("css/images/dice-5.png")`);
  document.documentElement.style.setProperty('--image-coriolis-dice6', ` url("css/images/dice-6.png")`);
  document.documentElement.style.setProperty('--image-coriolis-drop-down-arrow', ` url("icons/drop-down-arrow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-roll-grow', ` url("icons/roll-glow.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-darkness-point-add', `url("icons/darkness-point-add.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-rolling-dices', `  url("icons/rolling-dices-orange.svg")`); 
  document.documentElement.style.setProperty('--image-coriolis-checkbox', ` url("icons/checkbox-unchecked.svg")`);
  document.documentElement.style.setProperty('--image-coriolis-header', ` url("icons/image_placeholder.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background', ` url("icons/background_paper.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-journal-sidebar', ` url("../../../modules/coriolis-corerules/css/images/sidebar_bg.png")`);
  document.documentElement.style.setProperty('--image-coriolis-default-background', ` url("coreui/parchment.jpg")`);
  document.documentElement.style.setProperty('--image-chat-message', ` url("icons/background_paper.webp")`);
  document.documentElement.style.setProperty('--image-coriolis-background-char', ` url("../../../systems/yzecoriolis/css/images/char-sheet-bg.jpg")`);
  document.documentElement.style.setProperty('--image-coriolis-background-ship', ` url("../../../systems/yzecoriolis/css/images/ship-sheet-bg.jpg")`);

  document.documentElement.style.setProperty('--color-chat-message-text','#111');
  document.documentElement.style.setProperty('--color-chat-header-text','#222');
  document.documentElement.style.setProperty('--color-chat-light-text','#f0f0e0');
  document.documentElement.style.setProperty('--color-chat-message-border','#6f6c66');
  document.documentElement.style.setProperty('--color-entity-color',' black');
  document.documentElement.style.setProperty('--color-chat-button-text','#111');

  
  document.documentElement.style.setProperty('--color-coriolis-chat-background1','rgba(0,0,0,0)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background2','rgba(0,0,0,0)');
  document.documentElement.style.setProperty('--color-coriolis-chat-background3','rgba(0,0,0,0)');
  document.documentElement.style.setProperty('--color-select-box','rgba(0, 0, 0, 0.05)');


  document.documentElement.style.setProperty('--color-coriolis-blue1',' #7182be');
  document.documentElement.style.setProperty('--color-coriolis-blue4',' #71c0ec');
  document.documentElement.style.setProperty('--color-coriolis-blue6',' #9fb0ed');
  document.documentElement.style.setProperty('--color-coriolis-blue2',' rgba(19, 27, 53, 0.45)');
  document.documentElement.style.setProperty('--color-coriolis-blue3',' rgba(113, 130, 190, 0.35)');
  document.documentElement.style.setProperty('--color-coriolis-blue5',' rgba(113, 130, 190, 0.44)');
  document.documentElement.style.setProperty('--color-coriolis-blue7',' rgba(19, 27, 53, 0.78)');
  document.documentElement.style.setProperty('--color-coriolis-white',' white');
  document.documentElement.style.setProperty('--color-coriolis-gray1',' #e5e5e5');
  document.documentElement.style.setProperty('--color-coriolis-gray2',' #a4a4a4');
  document.documentElement.style.setProperty('--color-coriolis-placeholder',' #7b7c4c');
  document.documentElement.style.setProperty('--color-coriolis-orange1','#ffa903');
  document.documentElement.style.setProperty('--color-coriolis-yellow1',' #fdff9d');
  document.documentElement.style.setProperty('--color-coriolis-black',' black');
  document.documentElement.style.setProperty('--color-coriolis-flicker',' rgba(59, 84, 166, 0.45)');
  document.documentElement.style.setProperty('--color-coriolis-gear-equiped-blue-hoover','  rgba(19, 27, 53, 0.75)');
  document.documentElement.style.setProperty('--color-coriolis-notes-edit-hoover',' rgba(46, 65, 128, 0.45)');
  document.documentElement.style.setProperty('--color-coriolis-crew-roll-hoover-number',' #041126');
  document.documentElement.style.setProperty('--color-coriolis-ship-module-toggle','  #bf0909');
  document.documentElement.style.setProperty('--color-coriolis-ship-button-enable-hoover',' #c1cf6a');
  document.documentElement.style.setProperty('--color-coriolis-numeric-input','  #7a7971');
  document.documentElement.style.setProperty('--color-coriolis-success-critical','green');
  document.documentElement.style.setProperty('--color-coriolis-success-limited',' greenyellow');
  document.documentElement.style.setProperty('--color-coriolis-success-failure',' red');
  document.documentElement.style.setProperty('--color-coriolis-push','#44191a');
  document.documentElement.style.setProperty('--color-coriolis-input-text',' black');
  document.documentElement.style.setProperty('--color-coriolis-item-boarder1',' #aaa');
  document.documentElement.style.setProperty('--color-coriolis-item-boarder2',' black');
  document.documentElement.style.setProperty('--color-coriolis-attr-block','rgba(19, 27, 53, 0.45)');
  document.documentElement.style.setProperty('--color-coriolis-encumbrance-bar','rgba(19, 27, 53, 0.45)');
/*red colors unifcation*/
  document.documentElement.style.setProperty('--color-coriolis-red',' red');
  document.documentElement.style.setProperty('--color-coriolis-red1',' red');
  document.documentElement.style.setProperty('--color-coriolis-red2',' red');

/*hp increase unification*/
  document.documentElement.style.setProperty('--color-coriolis-ship-hp-increase',' #40bf20');
  document.documentElement.style.setProperty('--color-coriolis-hp-hoover-to-increase','#40bf20');
  document.documentElement.style.setProperty('--color-coriolis-ship-bar-segment',' #40bf20');

/*misc increase unifcation*/
  document.documentElement.style.setProperty('--color-coriolis-increase-enable','#b1c343');
  document.documentElement.style.setProperty('--color-coriolis-xp-hoover-increase','#603fa7');
  document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-increase','#cf4264');

  document.documentElement.style.setProperty('--color-coriolis-ship-ep-increase',' #71c0ec');
  document.documentElement.style.setProperty('--color-coriolis-mind-points-increase','#3f82a7');

  /*interactive character sheet bars decrease colors unifaction*/
  document.documentElement.style.setProperty('--color-coriolis-decrease','#44482c');
  document.documentElement.style.setProperty('--color-coriolis-reputation-hoover-decrease',' #44482c');
  document.documentElement.style.setProperty('--color-coriolis-ship-hoover-to-decrease','#44482c');
  document.documentElement.style.setProperty('--color-coriolis-xp-hoover-decrease','#44482c');
  document.documentElement.style.setProperty('--color-coriolis-radiation-decrease','#44482c');
  document.documentElement.style.setProperty('--color-coriolis-ship-ep-decrease','  #44482c');
  document.documentElement.style.setProperty('--color-coriolis-mind-bar-decrease','#44482c');

/*coriolis core rulebook journals*/
  document.documentElement.style.setProperty('--color-coriolis-core-text','black');
  document.documentElement.style.setProperty('--color-coriolis-core-sidetext','silver');
      
//background gradients and urls
  
  	};
  }
);
