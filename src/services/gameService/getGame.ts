import { getCards } from '../cardcastService/getCards';
const setId = 'JP8FV';
const cardsPerHand = 10;
function dealHands(whiteCards: Card[], players: Player[]): void {
    const fullDeck = [...whiteCards];
    let cardCount = whiteCards.length;
    let playersCount = players.length;
    for (let i = 0, playerIndex = 0; i < cardsPerHand * players.length; i++) {
        const randomIndex = Math.floor(Math.random() * cardCount);
        const card = fullDeck.splice(randomIndex, 1)[0];
        const player = players[playerIndex];
        if (player) {
            player.hand?.push(card);
        }
        playerIndex = playerIndex == playersCount - 1 ? 0 : playersCount++;
        cardCount--;
    }
}
export const getGame = async (id: string): Promise<Game | undefined> => {
    try {
        const gameData = await getCards(setId);
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
        return {
            id,
            ...gameData,
            players,
            state: 'starting',
        };
    } catch (error) {
        console.error('unable to get game', error);
    }
};
