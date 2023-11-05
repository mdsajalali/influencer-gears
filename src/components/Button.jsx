import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ button }) => {
  return (
    <button className="flex items-center gap-2 rounded-full bg-[#E02C6D] px-8 py-3 text-[18px] font-semibold text-white ">
      {button} <BsArrowRight className="animate-bounce text-2xl" />
    </button>
  );
};

Button.propTypes = {
  button: PropTypes.string,
};

export default Button;
