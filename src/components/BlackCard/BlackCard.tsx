import styled from 'styled-components';

const StyledBlackCard = styled.div`
    background: black;
    color: white;
    width: 150px;
    height: 300px;
    padding: 10px;
    font-size: xx-large;
    font-weight: bolder;
    border-radius: 25px;
    border: 2px solid black;
    position: relative;
`;
const StyledP = styled.p`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;
interface BlackCardProps {
    text: string;
}

const BlackCard = (props: BlackCardProps): JSX.Element => (
    <StyledBlackCard>
        <StyledP>{props.text}</StyledP>
    </StyledBlackCard>
);

export default BlackCard;
