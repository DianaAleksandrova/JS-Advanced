const { expect } = require('chai');
const { bookSelection } = require('./bookSelection');

describe('Test', () => {
    describe('isGenreSuitable', () => {
        it('happy path', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 20)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Horror', 20)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('o', 20)).to.be.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('a', 10)).to.be.equal('Those books are suitable');
        });
        it('incorrect genre for the age', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 10)).to.be.equal('Books with Thriller genre are not suitable for kids at 10 age');
            expect(bookSelection.isGenreSuitable('Horror', 10)).to.be.equal('Books with Horror genre are not suitable for kids at 10 age');
        });
        it('incorrect genre for the age, edge case', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.be.equal('Books with Thriller genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.be.equal('Books with Horror genre are not suitable for kids at 12 age');
        });
    });
    describe('isItAffordable', () => {
        it('happy path', () => {
            expect(bookSelection.isItAffordable(1, 2)).to.be.equal('Book bought. You have 1$ left');
            expect(bookSelection.isItAffordable(1, 1)).to.be.equal('Book bought. You have 0$ left');
        });
        it('not enough money', () => {
            expect(bookSelection.isItAffordable(2, 1)).to.be.equal('You don\'t have enough money');
        });
        it('invalid input', () => {
            expect(() => bookSelection.isItAffordable('2', 1)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(2, '1')).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable('2', '1')).to.throw('Invalid input');
        });
    });
    describe('suitableTitles', () => {
        it('happy path', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'aa',
                    genre: 'a'
                }], 'a')).to.deep.equal(['aa']);

            expect(bookSelection.suitableTitles([
                {
                    title: 'aa',
                    genre: 'a'
                },
                {
                    title: 'bb',
                    genre: 'b'
                },
                {
                    title: 'cc',
                    genre: 'a'
                }], 'a')).to.deep.equal(['aa', 'cc']);
        });
        it('no match', () => {
            expect(bookSelection.suitableTitles([
                {
                    title: 'aa',
                    genre: 'a'
                }], 'b')).to.deep.equal([]);
        });
        it('invalid input', ()=>{
            expect(() => bookSelection.suitableTitles('abcd','a')).to.throw();
            expect(() => bookSelection.suitableTitles([{
                title: 'aa',
                genre: '5'
            }], 5)).to.throw();
        })
    });
});