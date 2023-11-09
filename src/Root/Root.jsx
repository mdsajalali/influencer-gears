import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../pages/Navbar";

const Root = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1200px]">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
