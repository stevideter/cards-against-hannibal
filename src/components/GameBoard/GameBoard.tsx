import styled from 'styled-components';
import BlackCard from '../BlackCard/BlackCard';
import WhiteCard from '../WhiteCard/WhiteCard';
import { useReducer } from 'react';

const StyledGameBoard = styled.div`
    background-color: white;
`;
const StyledBlackCard = styled.div`
    margin: 10px;
`;
const StyledCardsInPlay = styled.div`
    display: flex;
`;
const StyledWhiteCards = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: row;
`;
interface GameBoardProps {
    whiteCards: Card[];
    currentRound?: Round;
}
export type GameBoardAction = { type: 'playCard'; payload: string };

const GameBoard: React.FunctionComponent<GameBoardProps> = (
    props: GameBoardProps
) => {
    const { whiteCards, currentRound } = props;
    type GameBoardState = {
        cardsInPlay: Card[];
        whiteCards: Card[];
    };
    const initialState: GameBoardState = {
        cardsInPlay: [],
        whiteCards,
    };

    function cardsInPlayReducer(
        state: GameBoardState,
        action: GameBoardAction
    ): GameBoardState {
        switch (action.type) {
            case 'playCard': {
                const playedCard = state.whiteCards.find(
                    (card) => card.id == action.payload
                );
                if (playedCard) {
                    const cards = state.cardsInPlay.concat(playedCard);
                    const updatedCards = state.whiteCards.filter(
                        (card) => card.id != action.payload
                    );
                    return {
                        ...state,
                        cardsInPlay: cards,
                        whiteCards: updatedCards,
                    };
                }
            }
        }
        return state;
    }

    const [state, dispatch] = useReducer(cardsInPlayReducer, initialState);

    const text = currentRound?.blackCard?.text || '';

    const blackCard = <BlackCard text={text} />;
    return (
        <StyledGameBoard>
            <StyledCardsInPlay>
                <StyledBlackCard>{blackCard}</StyledBlackCard>
                <StyledWhiteCards>
                    {state.cardsInPlay.map((card) => (
                        <WhiteCard
                            key={card.id}
                            id={card.id}
                            text={card.text}
                            dispatch={dispatch}
                        />
                    ))}
                </StyledWhiteCards>
            </StyledCardsInPlay>
            <StyledWhiteCards>
                {state.whiteCards.map((card) => (
                    <WhiteCard
                        key={card.id}
                        id={card.id}
                        text={card.text}
                        dispatch={dispatch}
                    />
                ))}
            </StyledWhiteCards>
        </StyledGameBoard>
    );
};

export default GameBoard;
