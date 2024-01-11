import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";
import Modal from "./components/Modal/Modal";
import CreateTodo from "./components/Forms/CreateTodo";
import TodoList from "./components/TodoList/TodoList";

const App = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  // const [todo, setTodo] = useState(null);
  const [todo, setTodo] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isCreated, setIsCreated] = useState(false);

  // every render & mount
  useEffect(() => {
    console.log("render");
  });

  // cdm
  useEffect(() => {
    console.log("mount");
  }, []);

  // cdm + cdu + if()
  useEffect(() => {
    console.log("mount + updated todo");
  }, [todo]);

  useEffect(() => {
    if (todo.length > 0) return;
    // todo.length > 0&& return
  }, [todo]);

  const toggleModal = () => {
    setIsShowModal((prevState) => !prevState);
  };

  const createTodo = (data) => {
    const newTodo = {
      ...data,
      id: nanoid(),
      completed: false,
    };
    const isDuplicate = todo.find((elem) => elem.title === data.title);
    if (isDuplicate) return;
    setTodo((prevState) => [...prevState, newTodo]);
  };
  const deleteTodo = (id) => {
    setTodo((prevState) => prevState.filter((elem) => elem.id !== id));
  };

  const updateTodo = (id) => {
    setTodo((prevState) =>
      prevState.todo.map((elem) =>
        elem.id === id ? { ...elem, completed: !elem.completed } : elem
      )
    );
  };

  return (
    <>
      {isDeleted && <div>Deleted</div>}
      {isCreated && <div>Created</div>}
      {/* ===============Module 1============= */}
      {/* <Container>
        <Card />
      </Container>
      <Container><div>Hello world</div></Container>
      <Card2 /> */}
      {/* =============Module 2(Modal and counter)========= */}
      <Header showModal={toggleModal} />

      <ProductsList />
      {isShowModal && <Modal hideModal={toggleModal}>Modal window</Modal>}
      {/* <Counter /> */}
      {/* ===========Module 2 (Form)===================== */}
      {/* <FormCreate sendUserData={this.sendUserData} /> */}
      {/* ===========Module 2 (Todo Form)================ */}
      <CreateTodo createTodo={createTodo} />
      {todo && (
        <TodoList todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
      )}
    </>
  );
};

export default App;
