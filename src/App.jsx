import FeaturedProduct from "./pages/FeaturedProduct"; 
import Hero from "./pages/Hero"; 
import Products from "./pages/Products";
import Sponsors from "./pages/Sponsors";

const App = () => {
  return (
    <>
      <div className="mx-auto max-w-[1200px] p-10">
        <Hero />
        <Sponsors />
        <Products />
        <FeaturedProduct />
      </div>
    </>
  );
};

export default App;
