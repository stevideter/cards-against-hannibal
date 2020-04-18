interface StartGameRequest {
    players: Player[];
}
export const NOT_ENOUGH_PLAYERS = 'not enough players';
export const startGame = async (
    startGameRequest: StartGameRequest
): Promise<Game> => {
    const { players } = startGameRequest;
    if (!players || players.length < 3) {
        throw new Error(NOT_ENOUGH_PLAYERS);
    }
    return {
        id: 'game',
        players: startGameRequest.players,
        state: 'started',
    };
};
