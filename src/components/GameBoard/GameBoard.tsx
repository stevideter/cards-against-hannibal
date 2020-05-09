import styled from 'styled-components';
import BlackCard from '../BlackCard/BlackCard';
import WhiteCard from '../WhiteCard/WhiteCard';

const StyledGameBoard = styled.div`
    background-color: white;
`;
const StyledBlackCard = styled.div`
    margin: 10px;
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

const GameBoard: React.FunctionComponent<GameBoardProps> = (
    props: GameBoardProps
) => {
    const { whiteCards, currentRound } = props;
    const whiteCardList = whiteCards.map((card, i) => (
        <WhiteCard text={card.text} key={i} id={card.id} />
    ));
    const text = currentRound?.blackCard?.text || '';

    const blackCard = <BlackCard text={text} />;
    return (
        <StyledGameBoard>
            <StyledBlackCard>{blackCard}</StyledBlackCard>
            <StyledWhiteCards>{whiteCardList}</StyledWhiteCards>
        </StyledGameBoard>
    );
};

export default GameBoard;
