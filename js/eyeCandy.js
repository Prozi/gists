// for nodejs

// lib
var Singleton = require('./singleton.js').Singleton;

// simple eye candy matrix like for console output
var eyeCandy = new Singleton('eyeCandy', function () {

	var random = function (max) { 
		return Math.floor(Math.random() * max); 
	};

	var clc     = require('cli-color'),
		candies = ["あ", "た", "ア", "カ", "サ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "シ", "ス", "セ", "ソ", "キ", "ク", "ケ", "コ", "イ", "ウ", "エ", "オ", "ジ", "ャ", "な"],
		colors  = [
			['black', 'blue' , 'blueBright' , 'white', 'whiteBright'],
			['black', 'green', 'greenBright', 'white', 'whiteBright'],
			['black', 'red'  , 'redBright'  , 'white', 'whiteBright']
		],
		variant   = random(3),
		sleep     = 20,
		direction = 0.5; // [0..1]

	var turnABit = function () {
		direction = (direction + (random(101) - 50) / 100) % 1;
		direction = direction + Math.cos((1 + direction) * Math.PI) / 10;
	};

	var makeCandy = function () {

		var color, candy;

		if (Math.random() < 0.3) {
			variant = random(3);
		}
		turnABit();
		color = colors[variant][Math.round(Math.abs(direction) * colors.length)];
		candy = candies[random(candies.length)];
		process.stdout.write(clc[color](candy));
		setTimeout(makeCandy, sleep);
	};

	setTimeout(makeCandy, 0);
});

// export modules
module.exports = {
	eyeCandy   : eyeCandy
};
