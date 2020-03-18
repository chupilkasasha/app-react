import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./todo-list.css";

let TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  let elements = todos.map(item => (
    <li key={item.id} className="list-group-item">
      {/* <TodoListItem label={item.label} important={item.important} /> */}
      <TodoListItem
        {...item}
        onDeleted={() => onDeleted(item.id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
      />
    </li>
  ));
  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
