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
    blackCards: Card[];
}

const GameBoard = (props: GameBoardProps): JSX.Element => {
    const whiteCards = [];
    const fullDeck = [...props.whiteCards];
    let cardCount = props.whiteCards.length;
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * cardCount);
        const card = fullDeck.splice(randomIndex, 1)[0];
        whiteCards.push(<WhiteCard text={card.text} key={i} id={card.id} />);
        cardCount--;
    }
    const randomIndex = Math.floor(Math.random() * props.blackCards.length);

    const blackCard = <BlackCard text={props.blackCards[randomIndex].text} />;
    return (
        <StyledGameBoard>
            <StyledBlackCard>{blackCard}</StyledBlackCard>
            <StyledWhiteCards>{whiteCards}</StyledWhiteCards>
        </StyledGameBoard>
    );
};

export default GameBoard;
