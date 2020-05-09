import { getCards } from '../cardcastService/getCards';
const setId = 'JP8FV';
const cardsPerHand = 10;
function dealHands(whiteCards: Card[], players: Player[]): void {
    const fullDeck = [...whiteCards];
    let cardCount = whiteCards.length;
    const totalToDeal = cardsPerHand * players.length;
    const dealtCards: Card[] = [];
    for (let i = 0; i < totalToDeal; i++) {
        const randomIndex = Math.floor(Math.random() * cardCount);
        dealtCards.push(fullDeck.splice(randomIndex, 1)[0]);
        cardCount--;
    }
    players.forEach((player) => {
        player.hand = dealtCards.splice(0, cardsPerHand);
    });
}
function pickBlackCard(blackCards: Card[]): Card {
    const randomIndex = Math.floor(Math.random() * blackCards.length);
    return blackCards[randomIndex];
}

export const getGame = async (id: string): Promise<Game> => {
    try {
        const gameData = await getCards(setId);
        if (!gameData) {
            throw new Error(`no game for id ${id}`);
        }
        const players = [
            {
                id: 'one',
                name: 'hannibal',
                hand: [],
            },
            {
                id: 'two',
                name: 'will',
                hand: [],
            },
            {
                id: 'three',
                name: 'jack',
                hand: [],
            },
        ];
        dealHands(gameData.whiteCards, players);
        const currentRound: Round = {
            count: 0,
            blackCard: pickBlackCard(gameData.blackCards),
            whiteCards: [],
        };
        return {
            id,
            ...gameData,
            players,
            state: 'starting',
            currentRound,
        };
    } catch (error) {
        console.error('unable to get game', error);
        throw error;
    }
};
