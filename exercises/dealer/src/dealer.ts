/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Club,
  Diamond,
  Heart,
  Spade
}

type Card = [Suit, number];

export class Dealer {
  cards: Card[] = [];
  constructor() {
    for (let i = 12; i--; ) {
      this.cards.push([Suit.Heart, i]);
      this.cards.push([Suit.Club, i]);
      this.cards.push([Suit.Spade, i]);
      this.cards.push([Suit.Diamond, i]);
    }
  }
  readCard(card: Card) {
    console.log(` Your card is ${card[0]} of ${card[1]}  `);
  }
  dealHand(num: number) {
    for (let i = num; i--; ) this.cards.pop();
  }
  getLength() {
    return this.cards.length;
  }
}
