import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import Sponsors from "./pages/Sponsors";

const App = () => {
  return (
    <div className="mx-auto max-w-[1200px] p-10">
      <Navbar />
      <Hero />
      <Sponsors />
    </div>
  );
};

export default App;
