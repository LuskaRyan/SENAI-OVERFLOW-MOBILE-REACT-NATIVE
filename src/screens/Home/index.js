import React from "react"
import{ Text, View, StatusBar } from "react-native";
import CardQuestion from "../../components/CardQuestion";
import { Container, TextToolBar, ToolBar } from "./styles";


function Home() {
    return
    <Container>
        <Toolbar>
            <TextToolBar> SENAI OVERFLOW </TextToolBar>
        </Toolbar>
        <CardQuestion/>
    </Container>;
}

export default Home;