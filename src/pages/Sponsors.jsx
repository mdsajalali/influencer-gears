import { sponsors } from "../../public";
import Sponsor from "../components/Sponsor";

const Sponsors = () => {
  return (
    <div>
      <hr />
      <div className="my-10 flex flex-wrap items-center justify-center gap-10 md:justify-between  ">
        {sponsors.map((sponsor) => (
          <Sponsor key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Sponsors;
