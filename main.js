//Main.js for the git test
//its ya boi Matty-kun

"use strict";

//Define globals here

//Define Game
var game = new Phaser.Game(1000, 1000, Phaser.AUTO);

//starting game after the window loads

window.onload = function(){
	//defining our states
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.start("Load");
}