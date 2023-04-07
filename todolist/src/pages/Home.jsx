import React from "react";
import { Container } from "react-bootstrap";
import CompSearch from "../components/CompSearch";
import MainPageTodo from "./MainPage-Todo";

function Home() {
  return (
    <Container className="mt-2">
      <CompSearch/>
      <MainPageTodo/>
    </Container>
  );
}

export default Home;
