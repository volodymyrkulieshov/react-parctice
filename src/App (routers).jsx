import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import TodoPage from "./pages/TodoPage";
// import Header from "./components/Header/Header";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import Layout2 from "./layout/Layout2";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />}>
            <Route path=":productId" element={<ProductDetailsPage />} />
          </Route>
          <Route path="products/:productId" element={<ProductDetailsPage />} />
        </Route>
        <Route path="/" element={<Layout2 />}>
          <Route index element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="todo/:todoId" element={<TodoDetailsPage />} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};

export default App;
