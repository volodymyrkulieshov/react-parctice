import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todo, deleteTodo, updateTodo }) => {
  return todo.map((elem) => (
    <TodoItem
      todo={elem}
      key={elem.id}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  ));
};

export default TodoList;
