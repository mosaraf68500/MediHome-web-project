import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <header className="sticky top-0">
      <Header></Header>
      </header>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Root;
