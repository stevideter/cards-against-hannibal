interface CardcastCard {
    text: string[];
    id: string;
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
}
interface Game {
    id: string;
    players: Player[];
    state: string;
}
