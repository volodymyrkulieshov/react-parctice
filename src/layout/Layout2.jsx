import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header2";

const Layout2 = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout2;
