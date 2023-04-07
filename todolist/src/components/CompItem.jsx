import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";

function ToDoItem({ toDo, toggleCompleted }) {
  return (
    <tr key={toDo.id} className="mb-4">
      <td width={"84%"}>
        {toDo.complete ? (
          <strike>{toDo.task}</strike>
        ) : (
          <span>{toDo.task}</span>
        )}
      </td>
      <td className="d-flex justify-content-end">
        <Button variant="outlined" className="ms-4">
          <Form.Check.Input
            isValid
            value={toDo.id}
            checked={toDo.complete}
            onChange={toggleCompleted}
          />
        </Button>
        <Button variant="outlined" className="ms-4">
          <MdEditSquare style={{ color: "yellow" }} />
        </Button>
        <Button variant="outlined" className="ms-4">
          <FaTrashAlt style={{ color: "red" }}/>
        </Button>
      </td>
    </tr>
  );
}

export default ToDoItem;
