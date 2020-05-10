import styled from 'styled-components';
import { Dispatch } from 'react';
import { GameBoardAction } from '../GameBoard/GameBoard';

const StyledWhiteCard = styled.div`
    background: white;
    box-shadow: rgb(102, 102, 102) 0px 2px 2px 0px;
    box-sizing: border-box;
    color: black;
    width: 10em;
    height: 10em;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid black;
    position: relative;
    margin: 10px;
`;
const StyledP = styled.p`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.3em;
    font-family: MuseoSans, Arial, Helvetica, sans-serif;
    text-size-adjust: 100%;
`;
interface WhiteCardProps {
    id: string;
    text: string;
    dispatch: Dispatch<GameBoardAction>;
}
const WhiteCard: React.FunctionComponent<WhiteCardProps> = (
    props: WhiteCardProps
) => {
    function onClick(): void {
        props.dispatch({ type: 'playCard', payload: props.id });
    }
    return (
        <StyledWhiteCard id={props.id} onClick={onClick}>
            <StyledP>{props.text}</StyledP>
        </StyledWhiteCard>
    );
};

export default WhiteCard;
