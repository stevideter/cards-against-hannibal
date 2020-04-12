import styled from 'styled-components';

const StyledWhiteCard = styled.div`
background: white;
color: black;
width: 150px;
height: 300px;
padding: 10px;
border-radius: 25px;
border: 2px solid black;
position: relative;
margin: 10px;
`
const StyledP = styled.p`
margin: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
font-size: large;
font-weight: bolder;
`
interface WhiteCardProps {
  id: string;
  text: string;
}
const WhiteCard = (props: WhiteCardProps) => (
  <StyledWhiteCard id={props.id}>
    <StyledP>{props.text}</StyledP>
  </StyledWhiteCard>
);

export default WhiteCard;
