/* ===============Module 1============= */
// import Card from "./components/Card/Card";
// import Card2 from "./components/Card2/Card2";
// import Container from "./components/Container/Container";

/* =============Module 2(counter)========= */
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Counter from "./components/Counter/Counter";
import { Component } from "react";

class App extends Component {
  state = {
    isShowModal: false,
  };

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
  render() {
    return (
      <>
        {/* ===============Module 1============= */}
        {/* <Container>
        <Card />
      </Container>
      <Container><div>Hello world</div></Container>
      <Card2 /> */}
        {/* =============Module 2(counter)========= */}
        <Header showModal={this.toggleModal} />
        {this.state.isShowModal && (
          <Modal hideModal={this.toggleModal}>Modal window</Modal>
        )}
        <Counter />
      </>
    );
  }
}

export default App;
