// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App (routers)";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const div = document.createElement("div");
// const root = document.getElementById("root");

// root.append(div);

// =================================================

// const root = document.getElementById("root");

// const p = React.createElement("p", { className: "style", id: "456" });
// const div = React.createElement("div", {
//   className: "style",
//   id: "123",
//   children: [p, p],
// });

// =============================================

// const content = (
//   <p id="987" className="style">
//     Hello world
//   </p>
// );

// const div2 = (
//   <div id="789" className="style">
//     {content}
//   </div>
// );
// =====Component-Function==========
// const Div3 = (props) => {
//   console.log(props);
//   // console.log(age);
//   return (
//     <div id="654" className="style">
//       {content}
//       <img src="qwerty" alt="qwe"></img>
//     </div>
//   );
// };
// =====REACT FRAGMENT============
// const div4 = (
//   <React.Fragment>
//     {div2}
//     {div3}
//   </React.Fragment>
// );

// const div4 = (
//   <>
//     {div2}
//     {div3}
//   </>
// );

// =======Function===============

// const Container = () => (
//   <>
//     {div2}
//     <Div3 name="Alex" age={30} />
//     <p>Galaxy</p>
//     <img src="qwe" alt="zxc"></img>
//   </>
// );
// ReactDOM.createRoot(root).render(<Container />);

// ===========COMPONENT===============

// const Card = () => {
//   return data.map((el) => (
//     <div className="container" key={el.id}>
//       <h1>{el.title}</h1>
//       <h5>{el.body}</h5>
//       <p>Price</p>
//     </div>
//   ));
// };

// ReactDOM.createRoot(root).render(<Card />);
