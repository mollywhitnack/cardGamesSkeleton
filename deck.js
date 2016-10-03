module.exports = Deck;

function Deck() {
    this.fill();
    this.shuffle();
    this.suits = [ 'spade', , 'clubs','heart', 'diamond' ];
    this.ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
    this.cards = [];
}

Deck.prototype.fill = function() {
    for (let i=0; i<this.suits.length; i++) {
        for (let j=0; j<this.ranks.length; j++) {
            this.cards.push( this.ranks[j] + this.suits[i] );
        }
    }
};

Deck.prototype.shuffle = function() {

    for (let i =this.cards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        let x =this.cards[i - 1];
        this.cards[i - 1] =this.cards[j];
        this.cards[j] = x;
    }
};

//take card from top of deck
Deck.prototype.drawCard = function () {
    return this.cards.pop();
};