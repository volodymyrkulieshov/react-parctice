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
class App extends Component {
  state = {
    isShowModal: false,
    todo: data,
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
    this.setState((prevState) => ({
      todo: prevState.todo.map((elem) => {
        if (elem.id === id) return { ...elem, completed: !elem.completed };
        else return elem;
      }),
    }));
  };
  render() {
    return (
      <>
        {/* ===============Module 1============= */}
        {/* <Container>
        <Card />
      </Container>
      <Container><div>Hello world</div></Container>
      <Card2 /> */}
        {/* =============Module 2(Modal and counter)========= */}
        <Header showModal={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal hideModal={this.toggleModal}>Modal window</Modal>
        )}
        {/* <Counter /> */}
        {/* ===========Module 2 (Form)===================== */}
        {/* <FormCreate sendUserData={this.sendUserData} /> */}
        {/* ===========Module 2 (Todo Form)================ */}
        <CreateTodo createTodo={this.createTodo} />
        <TodoList
          todo={this.state.todo}
          deleteTodo={this.deleteTodo}
          updateTodo={this.updateTodo}
        />
      </>
    );
  }
}

export default App;
