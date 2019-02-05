/*
*logic
*/

var score = 0;
var playerChoice;

var readable = {
	'0' : 'Rock',
	'1' : 'Paper',
	'2' : 'Scissors'
};

// var cpuChoice = Math.floor(Math.random() * 3);

// console.log('cpuChoice', cpuChoice);

var cpuChoice = {
	init: function() {
		this.store = Math.floor(Math.random() * 3);
		this.text  = readable[this.store];
	},
	store: '', 
	text: '', 
};

// cpuChoice.init();
// console.log('cpuChoice:', cpuChoice.store, cpuChoice.text);



var chooseWinner = function(player, cpu) {
	var order = [0, 1, 2, 0]
	if(order[player] === order[cpu]) {
		return 'The computer chose the same weapon you did. Try again?';
	}
	if(order[player] === order[cpu + 1]) {
		score++;
		return 'You won! Keep going!';
	} else {
		score--;
		return 'You lose. :(';
	}
}

// console.log(chooseWinner(1,0));

// UI CODE

var paragraph = document.querySelector('p');

var assignClick = function(element, pos) {
	//assign a click listener
	element.addEventListener('click', function(){
	// set players choice
	playerChoice = pos;
	// give feedback to cpu choice
	cpuChoice.init();
	paragraph.innerText = 'The computer chose: ' + cpuChoice.text;
	// print out win or lose feedback
	paragraph.innerText += '\n' + chooseWinner(playerChoice, cpuChoice.store);
	//display the winner and score
	paragraph.innerText += '\n' + 'SCORE: ' + score;
	});
}

var images = {
	tags: document.getElementsByTagName('img'),
	init: function(){
		for(var step = 0; step , this.tags.length; step++){
			assignClick(this.tags[step], step);
		}
	}
}

images.init();






