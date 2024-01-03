// -------_USE HOOKS-----------------------////////
import { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import Product from "./Product/Product";

const ProductsList = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isShowProducts, setIsShowProducts] = useState(false);

  useEffect(() => {
    getProducts();
  }, [isShowProducts]);

  const getProducts = async () => {
    try {
      // this.setState({ isLoading: true, error: "" });
      setIsLoading(true);
      setError("");
      const response = await getAllProducts();
      // this.setState({ products: response.products });
      setProducts(response.products);
    } catch (error) {
      // console.log(error);
      // this.setState({ error: error.response.data });
      // this.setState({ error: error.message });
      setError(error.message);
    } finally {
      // this.setState({ isLoading: false });
      setIsLoading(false);
    }
  };
  const handleClick = () => {
    // this.setState((prevState) => ({
    //   isShowProducts: !prevState.isShowProducts,
    // }));
    setIsShowProducts((prevState) => !isShowProducts);
  };

  return (
    <>
      <button onClick={handleClick}>
        {isShowProducts ? "Hide Products" : "Show products"}
      </button>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {isShowProducts &&
        products &&
        products.map((elem) => <Product key={elem.id} product={elem} />)}
    </>
  );
};

export default ProductsList;
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
