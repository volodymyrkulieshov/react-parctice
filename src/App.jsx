/* ===============Module 1============= */
// import Card from "./components/Card/Card";
// import Card2 from "./components/Card2/Card2";
// import Container from "./components/Container/Container";

/* =============Module 2(counter)========= */
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
const App = () => {
  return (
    <>
      {/* ===============Module 1============= */}
      {/* <Container>
        <Card />
      </Container>
      <Container><div>Hello world</div></Container>
      <Card2 /> */}
      {/* =============Module 2(counter)========= */}
      <Header />
      <Counter />
    </>
  );
};

export default App;
