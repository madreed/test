//This is the load state in the git test thing

var Load = function(){};

Load.prototype = {
	preload: function(){
		//We will load in our gretest asset here.
		game.load.image('trashman', 'assets/trash.jpg');
	},
	create: function(){
		game.state.start('Play');
	}
};
