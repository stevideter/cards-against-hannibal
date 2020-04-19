import { getPlayerHand } from '../../respositories/games';

interface GetHandRequest {
    gameId: string;
    playerId: string;
}
export const getHand = async (
    getHandRequest: GetHandRequest
): Promise<Card[]> => {
    const { playerId, gameId } = getHandRequest;
    const hand = await getPlayerHand(playerId, gameId);
    if (hand) {
        return hand;
    }
    throw new Error('no hand');
};
