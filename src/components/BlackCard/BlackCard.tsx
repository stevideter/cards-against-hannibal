import styled from 'styled-components';

const StyledBlackCard = styled.div`
    background: black;
    box-shadow: rgb(102, 102, 102) 0px 2px 2px 0px;
    box-sizing: border-box;
    color: white;
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
interface BlackCardProps {
    id: string;
    text: string;
}

const BlackCard: React.FunctionComponent<BlackCardProps> = (
    props: BlackCardProps
) => (
    <StyledBlackCard id={props.id}>
        <StyledP>{props.text}</StyledP>
    </StyledBlackCard>
);

export default BlackCard;
