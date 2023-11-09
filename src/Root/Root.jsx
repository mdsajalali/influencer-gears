import { Outlet } from "react-router-dom"
import Navbar from "../pages/Navbar"
import Footer from "../pages/Footer"

const Root = () => {
  return (
    <div>
      <div className="mx-auto max-w-[1200px] p-10">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root