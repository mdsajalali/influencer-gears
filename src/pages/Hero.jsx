import bgCircle from "../assets/images/bg-circle.svg";
import DSLRCamera from "../assets/images/dslr-camera.png";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="my-10 flex min-h-[60vh] flex-wrap  items-center justify-center gap-10 xl:justify-between">
      <div>
        <h1 className="text-3xl font-extrabold md:text-5xl">
          Start your Journey as <br /> Influencer
        </h1>
        <p className="my-5 font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem <br />
          vestibulum sed scelerisque eros. Lectus faucibus.
        </p>
        <Button button="Preebook now" />
      </div>
      <div className="relative">
        <img src={bgCircle} alt="BG CIRCLE" />
        <img className="absolute top-6  " src={DSLRCamera} alt="DSLR Camera" />
      </div>
    </div>
  );
};

export default Hero;
