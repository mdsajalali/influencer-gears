import gear from "../assets/images/gear.png";
import Button from "../components/Button";

const FeaturedProduct = () => {
  return (
    <div className="mb-10 mt-36 flex flex-wrap   items-center justify-center gap-10 lg:justify-between">
      <div>
        <img src={gear} alt="Gear" />
      </div>
      <div>
        <h1 className="text-2xl font-bold md:text-4xl">
          Featured products at one place
        </h1>
        <p className="my-5 max-w-[400px] text-[#969696] md:max-w-[500px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button button="Join Now" />
      </div>
    </div>
  );
};

export default FeaturedProduct;
