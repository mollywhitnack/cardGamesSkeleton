module.exports = Game;

var Player = require('./player.js');
var Deck = require('./deck.js');

function Game() {
    this.numToDeal = 0;
    this.players = [];          
    this.state = 'new';  //game state (new, deal, turn, win)
    this.dealerPos = 0;         
    this.turnPos = 0;                          
    this.deck = new Deck();     
}

Game.prototype.addPlayer = function(input) {
    var newPlayer = new Player(input);
    newPlayer.game = this;
    this.players.push(newPlayer);
};

Game.prototype.reset = function() {
    this.round = 'new';
    this.deck = new Deck();     // use new deck of cards
    for (var i=0; i<this.players.length; i++) {
        this.players[i].reset();
    }
};

Game.prototype.start = function(numToDeal) {
    this.reset();
    // deal cards to each player, edaler starts as player 0
    // begin game, start 'deal' Round
    this.deck.fill();
    this.deck.shuffle();
    this.state = 'deal';
    //deal cards to players
    for (let i=0; i<this.numToDeal; i++) {
        this.players[i].hand.push(this.deck.drawCard)
    }
};

Game.prototype.turn = function() {
    //check current state, 
    if(this.checkWinningScores)
        this.state = 'win';
    if(this.state === deal)
        this.state = 'turn';
};


Game.prototype.incrementPlayer = function() {
    //mod incriment to loop through players
    this.turnPos = ( this.turnPos+1 ) % this.players.length;
    
};

Game.prototype.nextRound = function() {
    if(this.checkEndRound()){
      //re-deal cards, check for win...
    }
};

Game.prototype.checkEndRound = function() {
    var endOfRound = true;
    //For each player, check if is isDone
    for(var i=0; i<this.players.length; i++) {
        if (this.players[i].isDone) {
            endOfRound = false;
        }
    }
    return endOfRound;
};

Game.prototype.checkWinningScores = function(win) {
    var highScore = Number.NEGATIVE_INFINITY;
    for(var i=0; i<this.players.length; i++) {
        if (highestBet < this.players[i].score) {
            highestBet = this.players[i].score;
        }
    }
    if(highScore >= win)
        return true
    else
        return false;
};

Game.prototype.getCurrentPlayer = function() {
    return this.players[this.turnPos];
};
