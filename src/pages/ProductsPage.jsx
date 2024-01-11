import { Outlet } from "react-router-dom";
import ProductsList from "../components/ProductsList/ProductsList";

const ProductsPage = () => {
  return (
    <div>
      <Outlet />
      <ProductsList />
    </div>
  );
};

export default ProductsPage;
