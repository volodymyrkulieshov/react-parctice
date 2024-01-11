// //////-------ROUTES (КОД ВИКЛАДАЧА)----------------///////////

import { useCallback, useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import Product from "./Product/Product";
// import Product from "../Product/index";

const LIMIT = 10;

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const getProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllProducts(page * LIMIT, LIMIT);
      setProducts((prev) =>
        prev ? [...prev, ...response.products] : response.products
      );
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      {/* <Product/> */}
      {isLoading && <h1>loading...</h1>}
      {error && <h1>{error}</h1>}
      {products && products.map((el) => <Product key={el.id} product={el} />)}

      <button className="btn btn-secondary mt-5 mx-5" onClick={handleLoadMore}>
        load more
      </button>
    </>
  );
};

export default ProductsList;

// // -------_USE HOOKS (МІЙ КОД)-----------------------////////
// import { useEffect, useState } from "react";
// import { getAllProducts } from "../../api/products";
// import Product from "./Product/Product";

// const ProductsList = () => {
//   const [products, setProducts] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [isShowProducts, setIsShowProducts] = useState(false);

//   useEffect(() => {
//     getProducts();
//   }, [isShowProducts]);

//   const getProducts = async () => {
//     try {
//       // this.setState({ isLoading: true, error: "" });
//       setIsLoading(true);
//       setError("");
//       const response = await getAllProducts();
//       // this.setState({ products: response.products });
//       setProducts(response.products);
//     } catch (error) {
//       // console.log(error);
//       // this.setState({ error: error.response.data });
//       // this.setState({ error: error.message });
//       setError(error.message);
//     } finally {
//       // this.setState({ isLoading: false });
//       setIsLoading(false);
//     }
//   };
//   const handleClick = () => {
//     // this.setState((prevState) => ({
//     //   isShowProducts: !prevState.isShowProducts,
//     // }));
//     setIsShowProducts((prevState) => !isShowProducts);
//   };

//   return (
//     <>
//       <button onClick={handleClick}>
//         {isShowProducts ? "Hide Products" : "Show products"}
//       </button>
//       {isLoading && <h1>Loading...</h1>}
//       {error && <h1>{error}</h1>}
//       {isShowProducts &&
//         products &&
//         products.map((elem) => <Product key={elem.id} product={elem} />)}
//     </>
//   );
// };

// export default ProductsList;
// -------------USE CLASS COMPONENT--------------------/////////

// import { Component, useState } from "react";
// import Product from "./Product/Product";
// // import axios from "axios";
// import { getAllProducts } from "../../api/products";

// class ProductList extends Component {
//   state = {
//     products: null,
//     isLoading: false,
//     error: "",
//     isShowProducts: false,
//   };

//   // componentDidMount() {
//   //   axios("https://dummyjson.com/products").then((response) => {
//   //     this.setState({ products: response.data.products });
//   //   });
//   // }

//   componentDidMount() {
//     // this.getProducts();
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (
//       this.state.isShowProducts !== prevState.isShowProducts &&
//       this.state.isShowProducts
//     ) {
//       this.getProducts();
//     }
//     if (
//       this.state.isShowProducts !== prevState.isShowProducts &&
//       !this.state.isShowProducts
//     ) {
//       this.setState({ products: null });
//     }
//   }

//   getProducts = async () => {
//     try {
//       this.setState({ isLoading: true, error: "" });
//       const response = await getAllProducts();
//       this.setState({ products: response.products });
//     } catch (error) {
//       console.log(error);
//       this.setState({ error: error.response.data });
//       // this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };
//   handleClick = () => {
//     this.setState((prevState) => ({
//       isShowProducts: !prevState.isShowProducts,
//     }));
//   };

//   render() {
//     const { products, isLoading, error, isShowProducts } = this.state;
//     return (
//       <>
//         <button onClick={this.handleClick}>
//           {isShowProducts ? "Hide Products" : "Show products"}
//         </button>
//         {isLoading && <h1>Loading...</h1>}
//         {error && <h1>{error}</h1>}
//         {isShowProducts &&
//           products &&
//           products.map((elem) => <Product key={elem.id} product={elem} />)}
//       </>
//     );
//   }
// }
