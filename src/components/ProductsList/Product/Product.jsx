// ----------МІЙ КОД------------//////\

// import { Link } from "react-router-dom";

// const Product = ({ product }) => {
//   return (
//     <Link to={`${product.id}`}>
//       <div>{product.title}</div>;
//     </Link>
//   );
// };

// export default Product;

// ---------- ROUTES (КОД ВИКЛАДАЧА)------------//////\

import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to={`${product.id}`}>
      <div className="container">
        <div className="card p-2">
          <p>{product.title}</p>
          <p>{product.price} $</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
