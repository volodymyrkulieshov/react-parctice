import data from "../../data.json";
import css from "./Card.module.css";
import clsx from "clsx";

const Card = ({ children }) => {
  console.log("children :>> ", children);

  // const styles = `${css.container} ${el.id % 2 === 0 ? "online" : "offline"}`;
  return data.map((el) => (
    // <div className={css.container} key={el.id}>
    // ============STYLES COLLECTION===========
    <div
      // className={clsx({ [css.container]: el.id % 2 === 0 })}
      className={clsx(el.id % 2 === 0 ? "online" : "offline", css.container)}
      key={el.id}
    >
      {/* ========RENDER ПО УМОВІ========================= */}
      {/* {el.id % 2 === 0 ? <h1>OK</h1> : <h5>ERROR</h5>} */}
      {/* {el.id % 2 === 0 && <h1>OK</h1>} */}
      {/* =============INLINE STYLES==================== */}
      {/* <h1 style={{ backgroundColor: "teal" }}>{el.title}</h1> */}
      {/* =========MODULE CSS========================= */}
      <h1 className={css.title}>{el.title}</h1>
      <h5>{el.body}</h5>
      <p>Price</p>
    </div>
  ));
};

export default Card;
