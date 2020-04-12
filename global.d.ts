interface CardcastCard {
    text: string[];
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
