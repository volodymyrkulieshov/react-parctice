import React from "react";

const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
  return (
    <>
      <li>
        {todo.title}
        <p>{todo.description}</p>
      </li>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      <br />
      <button onClick={() => updateTodo(todo.id)}>
        {todo.completed.toString()}
      </button>
    </>
  );
};

export default TodoItem;
