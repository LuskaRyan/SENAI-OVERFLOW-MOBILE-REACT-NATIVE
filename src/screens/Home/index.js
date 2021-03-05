import React from "react";
import { FlatList, StatusBar } from "react-native";
import CardQuestion from "../../components/CardQuestion";
import colors from "../../styles/colors";
import { Container, TextToolBar, ToolBar } from "./styles";

function Home() {
  StatusBar.setBackgroundColor(colors.primary);

  return (
    <Container>
      <ToolBar>
        <TextToolBar>Senai overflow</TextToolBar>
      </ToolBar>
        <FlatList data={[1,2,3]} keyExtractor={(n) => String(n)} renderItem={(n) => (<CardQuestion />)}/>
    </Container>
  );
}

export default Home;
