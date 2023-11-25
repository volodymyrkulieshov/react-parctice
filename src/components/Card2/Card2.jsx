// import styled from "styled-components";
import data from "../../data.json";
import { Container } from "./Card.styled";

// =========CSS IN JS=============
// const Container = styled("div")`
//   background-color: #dbdb90;
//   color: teal;
//   text-align: end;
// `;

// const Container = styled("div")((id) => {
//   const isOnline = id.el % 2 === 0;
//   return {
//     textAlign: "center",
//     backgroundColor: "purple",
//     h1: {
//       color: isOnline ? "navy" : "aquamarine",
//     },
//   };
// });

const Card2 = () => {
  return data.map((el) => (
    <Container key={el.id} id={el.id}>
      <h1>{el.title}</h1>
      <h5>{el.body}</h5>
      <p>Price</p>
    </Container>
  ));
};

// const Card2Styled = styled(Card2)`
//   background-color: black;
//   color: burlywood;
// `;
export default Card2;
// export default Card2Styled;
