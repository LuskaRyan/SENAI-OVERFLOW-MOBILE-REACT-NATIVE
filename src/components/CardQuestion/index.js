import React from "react";
import { Container,CardHeader,ImageProfile,HeaderContent,TextPoster,TextDate, ImageQuestion, TextDescription, TextTitle, CardBody } from "./styles";
import fotoPerfil from "../../../assets/fotoperfil.png"


function CardAnswer () {

}


function CardQuestion () {

    return(
        <Container>
            <CardHeader>
                <ImageProfile source={}/>
                <HeaderContent>
                    <TextPoster>Por fulano</TextPoster>
                    <TextDate>10/10/2010 as 10:10 </TextDate>
                </HeaderContent>
            </CardHeader>
            <CardBody>
                <TextTitle>Titulo da quextao</TextTitle>
                <TextDescription>Descrição da questao aqui</TextDescription>
                <ImageQuestion/>
            </CardBody>
            <CardFooter>
                <TextPoster>SEJA O PRIMEIRO A RESPONDER</TextPoster>

                <ContainerInputAnswer>
                    <InputAnswer/>

                </ContainerInputAnswer>
            </CardFooter>
        </Container>
    )
}

export default CardQuestion;