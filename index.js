var Game = require('./game.js');

//implement unique games here
var poker = new Game();

poker.addPlayer({
    name: "A",
    chips: 40000
});
poker.addPlayer({
    name: "B",
    chips: 20000
});

//deal 5 cards to each player
poker.start(5);

