module.exports = Player;

function Player(input) {
    this.name = input.name;
    this.chips = input.chips;
    this.game = null;

    this.hand = [];
    this.currBet = 0;
    this.score=0;

    this.lastAction = "";     
    this.isDone = false;      
}

Player.prototype.reset = function() {
    this.hand = [];
    this.currBet = 0;
    this.score = 0;

    this.lastAction = "";
    this.isDone = false;
};

Player.prototype.addBet = function(amount) {
    if (this.chips < amount) {
        //not enough chips
    }
    else{
    this.chips -= amount;
    this.currBet += amount;
    }
};