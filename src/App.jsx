/* ===============Module 1============= */
// import Card from "./components/Card/Card";
// import Card2 from "./components/Card2/Card2";
// import Container from "./components/Container/Container";

/* =============Module 2(counter)========= */
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
// import Counter from "./components/Counter/Counter";
import { Component } from "react";
// import FormCreate from "./components/Forms/FormCreate";
import data from "./dataTodo.json";
import CreateTodo from "./components/Forms/CreateTodo";
import TodoList from "./components/TodoList/TodoList";
import { nanoid } from "nanoid";
import ProductList from "./components/ProductsList/ProductsList";
class App extends Component {
  state = {
    isShowModal: false,
    todo: null,
    isDeleted: false,
    isCreated: false,
  };

  //==============Життєвий цикл===============

  // componentDidMount = () => {
  //   const localData = localStorage.getItem("todo");
  //   if (localData) {
  //     this.setState({ todo: JSON.parse(localData) });
  //   }
  // };

  componentDidMount() {
    const localData = localStorage.getItem("todo");
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({ todo: JSON.parse(localData) });
    } else {
      this.setState({ todo: data });
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.todo?.length !== this.state.todo.length) {
      localStorage.setItem("todo", JSON.stringify(this.state.todo));
    }

    if (prevState.todo?.length > this.state.todo.length) {
      this.setState({ isDeleted: true });
      setTimeout(() => {
        this.setState({ isDeleted: false });
      }, 1500);
    }

    if (prevState.todo?.length < this.state.todo.length) {
      this.setState({ isCreated: true });
      setTimeout(() => {
        this.setState({ isCreated: false });
      }, 1500);
    }
  };

  // ==========MODAL WINDOW================
  // showModal = () => {
  //   this.setState({
  //     isShowModal: true,
  //   });
  // };
  // hideModal = () => {
  //   this.setState({
  //     isShowModal: false,
  //   });
  // };
  toggleModal = () => {
    this.setState((prevState) => ({
      isShowModal: !prevState.isShowModal,
    }));
  };
  // =========New User Form===============
  // sendUserData = (data) => {
  //   const newUser = {
  //     ...data,
  //     id: "id-1",
  //     location: "UA",
  //   };
  //   console.log("data :>> ", newUser);
  // };

  createTodo = (data) => {
    const newTodo = {
      ...data,
      id: nanoid(),
      completed: false,
    };
    const isDuplicate = this.state.todo.find(
      (elem) => elem.title === data.title
    );
    if (isDuplicate) return;
    this.setState((prevState) => ({
      todo: [...prevState.todo, newTodo],
    }));
  };
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todo: prevState.todo.filter((elem) => elem.id !== id),
    }));
  };

  updateTodo = (id) => {
    this.setState(
      (prevState) => ({
        todo: prevState.todo.map((elem) => {
          if (elem.id === id) return { ...elem, completed: !elem.completed };
          else return elem;
        }),
      }),
      () => localStorage.setItem("todo", JSON.stringify(this.state.todo))
    );
  };
  render() {
    const { todo, isShowModal, isDeleted, isCreated } = this.state;
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
        <Header showModal={this.toggleModal} />

        <ProductList />
        {isShowModal && (
          <Modal hideModal={this.toggleModal}>Modal window</Modal>
        )}
        {/* <Counter /> */}
        {/* ===========Module 2 (Form)===================== */}
        {/* <FormCreate sendUserData={this.sendUserData} /> */}
        {/* ===========Module 2 (Todo Form)================ */}
        <CreateTodo createTodo={this.createTodo} />
        {todo && (
          <TodoList
            todo={todo}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          />
        )}
      </>
    );
  }
}

export default App;
