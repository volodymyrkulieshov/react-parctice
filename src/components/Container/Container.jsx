// ==========IMPORT VANILA CSS==============
// import "./Container.css";
// ==========IMPORT MODULE CSS==============
import css from "./Container.module.css";
const Container = ({ children }) => {
  return (
    /* ===============VANILA CSS============== */
    // <div className="container">

    // ===============MODULE CSS=================
    <div className={css.container}>
      <h1 className={css.title}>Hello world</h1>
      {children}
    </div>
  );
};

export default Container;
