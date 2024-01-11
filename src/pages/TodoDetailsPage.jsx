import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TodoDetailsPage = () => {
  const { todoId } = useParams();
  useEffect(() => {}, [todoId]);
  return <div>ToDo DETAILS</div>;
};

export default TodoDetailsPage;
