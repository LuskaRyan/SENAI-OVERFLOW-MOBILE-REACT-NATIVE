import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.View`
width:96%;
margin: 10px;
min-height: 100px;
padding:10px;

background-color: ${colors.darkGray};
border-radius: 10px;

`;

export const Container = styled.View`
flex-direction: row;
align-items: center;
`;

export const ImageProfile = styled.Image`
width:40px;
height:40px;
border-radius:20px;
`;

export const HeaderContent = styled.View`
flex-direction:column;
margin-left:5px;
`;

export const TextPoster = styled(TextDefalt)`
font-weight:bold;
`;

export const TextDate = styled(TextDefalt)`
font-size:12px;
opacity:0.9;
`;

export const CardBody = styled.View`
flex-direction:column;
margin-top: 15px;
`;

export const TextTitle = styled(TextDefalt)`
font-size:20px;
font-weight: bold;
margin-bottom: 2px;
`;

export const TextDescription = styled(TextDefalt)`
padding:8px;

border-left-width: 2px;
border-left-color: ${colors.primary};
`;

export const ImageQuestion = styled.Image`
margin-top: 15px;
width: 100%;
height:300px;

background-color:${colors.dark};
`;

export const CardFooter = styled.View`

`;

export const ContainerInputAnswer = styled.View`

`;

export const ContainerAnswer = styled.View`
padding:9px;

`;