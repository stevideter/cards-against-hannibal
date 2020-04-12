import fetch from 'isomorphic-unfetch';

export const getCards = async (setId: string): Promise<GameData> => {
    const cardcastUrl = `https://api.cardcastgame.com/v1/decks/${setId}/cards`;
    try {
        const fetchResponse = await fetch(cardcastUrl);
        const data: CardcastCardSet = await fetchResponse.json();

        const blackCards = data.calls.map((card: CardcastCard) => {
            const text = card.text.join('____');
            return { text, id: card.id };
        });
        const whiteCards = data.responses.map((card: CardcastCard) => {
            const text = card.text.join('');
            return { text, id: card.id };
        });
        return {
            blackCards,
            whiteCards,
        };
    } catch (err) {
        console.error(err);
        throw new Error('unable to get cards');
    }
};
