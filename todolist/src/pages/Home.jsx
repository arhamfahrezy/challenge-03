import React from "react";
import { Container } from "react-bootstrap";
import CompSearch from "../components/CompSearch";
import ToDoSearch from "./MainPage-Todo";

function Home() {
  return (
    <Container className="mt-2">
      <CompSearch/>
      <ToDoSearch/>
    </Container>
  );
}

export default Home;
