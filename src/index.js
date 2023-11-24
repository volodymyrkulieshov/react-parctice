// import React from "react";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

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

const root = document.getElementById("root");

const content = (
  <p id="987" className="style">
    Hello world
  </p>
);

const div2 = (
  <div id="789" className="style">
    {content}
  </div>
);
// =====Component-Function==========
const Div3 = () => {
  return (
    <div id="654" className="style">
      {content}
      <img src="qwerty" alt="qwe"></img>
    </div>
  );
};
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

const Container = () => (
  <>
    {div2}
    <Div3 />
    <p>Galaxy</p>
    <img src="qwe" alt="zxc"></img>
  </>
);
ReactDOM.createRoot(root).render(<Container />);
