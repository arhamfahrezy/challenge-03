import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table, InputGroup, Form, Button, Card,
} from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import ToDoItem from "../components/CompItem";
import todoData from "../list/data.json";

function ToDoSearch() {
  const [search, setSearch] = useState("");
  const [toDo, setToDo] = useState(todoData);
  const [filter, setFilter] = useState("All");
  const [filterSearch, setFilterSearch] = useState(null);

  const toggleCompleted = (e) => {
    setToDo((state) => {
      return state.map((tD) => {
        return Number(e.target.value) == tD.id
          ? { ...tD, complete: !tD.complete }
          : tD;
      });
    });
  };

  const onSearch = (e) => {
    e.preventDefault();
    setFilter("All");
    setFilterSearch(e.target["search"].value);
  };

  const deleteAllDone = (e) => {
    e.preventDefault();

    setToDo((state) => {
      const newState = state.filter((toDo) => {
        return toDo.complete == false;
      });
      return newState;
    });
  };

  const deleteAll = (e) => {
    e.preventDefault();

    setToDo([]);
  };

  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">
        <b>To-Do Search</b>
      </h2>
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body >
              <Row>
                <Col sm={8}>
                  <Form onSubmit={onSearch} >
                    <InputGroup className="mb-4">
                      <InputGroup.Text id="basic-addon1">
                        <ImSearch />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="search"
                        placeholder="Search Todo"
                        aria-label="search-todo"
                        aria-describedby="basic-addon1"
                        onChange={(event) => {
                          setSearch(event.target.value);
                        }}
                      />
                    </InputGroup>
                    <div className="d-grid gap-2">
                      <Button variant="info" type="submit" >
                        Search
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col
                  sm={4}
                  className="d-flex align-items-end justify-content-end"
                >
                  <Button
                    as={Link}
                    variant="info"
                    to="/todo-input"
                    style={{ width: "12rem" }}
                  >
                    Add new Task
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2 className="text-center mb-4">To-Do List</h2>
      <Row className="text-center">
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant="info"
              onClick={() => {
                setFilter("All");
              }}
            >
              All
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant="info"
              onClick={() => {
                setFilter("Done");
              }}
            >
              Done
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button
              variant="info"
              onClick={() => {
                setFilter("Todo");
              }}
            >
              Todo
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Table bordered hover>
            <tbody>
              {toDo &&
                toDo.length > 0 &&
                filter == "All" &&
                toDo.map((toDo) =>
                  filterSearch != null &&
                  toDo.task.toLowerCase().includes(filterSearch) ? (
                    <ToDoItem
                      toDo={toDo}
                      toggleCompleted={toggleCompleted}
                      key={toDo.id}
                    />
                  ) : (
                    filterSearch == null && (
                      <ToDoItem
                        toDo={toDo}
                        toggleCompleted={toggleCompleted}
                        key={toDo.id}
                      />
                    )
                  )
                )}
              {toDo &&
                toDo.length > 0 &&
                filter == "Done" &&
                toDo.map(
                  (toDo) =>
                    toDo.complete == true && (
                      <ToDoItem
                        toDo={toDo}
                        toggleCompleted={toggleCompleted}
                        key={toDo.id}
                      />
                    )
                )}
              {toDo &&
                toDo.length > 0 &&
                filter == "Todo" &&
                toDo.map(
                  (toDo) =>
                    toDo.complete == false && (
                      <ToDoItem
                        toDo={toDo}
                        toggleCompleted={toggleCompleted}
                        key={toDo.id}
                      />
                    )
                )}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <div className="d-grid gap-2">
            <Button variant="danger" onClick={deleteAllDone}>
              Delete done tasks
            </Button>
          </div>
        </Col>
        <Col>
          <div className="d-grid gap-2">
            <Button variant="danger" onClick={deleteAll}>
              Delete all tasks
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoSearch;
