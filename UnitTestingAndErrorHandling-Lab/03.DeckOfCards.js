function deckOfCards(arrayOfCards) {

    let result = [];

    for (let card of arrayOfCards) {
        let face = card.slice(0, -1);
        let suit = card.slice(-1);

        try{
            let playingCard = playingCards(face, suit);
            result.push(playingCard);
        }catch {
            result = [`Invalid card: ${card}`];
        }
    }
        console.log(result.join(' '));

    function playingCards(face, suit) {
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    
        if(faces.indexOf(face) == -1) {
            throw new Error('Error');
        }
        let suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
            C: '\u2663'
        };

        if(suits[suit] == undefined) {
            throw new Error('Error');
        }
    
        let result = {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
        return result;
    }
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);