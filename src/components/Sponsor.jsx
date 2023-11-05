import PropTypes from "prop-types";

const Sponsor = ({ sponsor }) => {
  const {img, id} = sponsor;
  return (
    <div>
      <img className="w-20" src={img} alt={id} />
    </div>
  );
};

Sponsor.propTypes = {
  sponsor: PropTypes.object,
};

export default Sponsor;
