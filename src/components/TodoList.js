import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({ id }) => {
  const todo = useSelector((store) => store.todoReducer.todos);

  const todoList = todo.map((item) => {
    return (
      <>
        <TodoItem id={item.id} key={id} title={item.value} />
      </>
    );
  });

  return (
    <>
      <h1>{todoList}</h1>
    </>
  );
};
export default TodoList;
