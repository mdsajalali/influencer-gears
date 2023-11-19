import FeaturedProduct from "./pages/FeaturedProduct";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Products from "./pages/Products";
import Sponsors from "./pages/Sponsors";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-[1200px]">
        <Navbar />
      </div>
      <div className="mx-auto max-w-[1200px] p-10">
        <Hero />
        <Sponsors />
        <Products />
        <FeaturedProduct />
      </div>
      <Footer />
    </>
  );
};

export default App;
