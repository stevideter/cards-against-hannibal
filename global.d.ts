interface CardcastCard {
    text: string[];
    id: string;
    blanks?: number;
}
interface CardcastCardSet {
    calls: CardcastCard[];
    responses: CardcastCard[];
}
interface Card {
    text: string;
    id: string;
}
interface GameData {
    blackCards: Card[];
    whiteCards: Card[];
}
interface Player {
    id: string;
    name: string;
    hand?: Card[];
}
interface Round {
    count: number;
    blackCard: Card;
    whiteCards: Card[];
}
interface Game extends GameData {
    id: string;
    players: Player[];
    state: string;
    currentRound?: Round;
}
