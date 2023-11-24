import data from "../../data.json";
const Card2 = () => {
  return data.map((el) => (
    <div className="container" key={el.id}>
      <h1>{el.title}</h1>
      <h5>{el.body}</h5>
      <p>Price</p>
    </div>
  ));
};
export default Card2;
