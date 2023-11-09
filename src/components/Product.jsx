import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, title, img, price, possibility, status, shifting, rating } =
    product;
  return (
    <div className="rounded-lg p-3 shadow-xl">
      <img className="mt-3" src={img} alt={title} />
      <h1 className="my-2 text-2xl">{title}</h1>
      <h2>${price}</h2>
      <h3 className="flex items-center">
        <div className="my-1 flex  text-[#FB8200]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <BsStarHalf />
        </div>
        <div className="my-1 ml-5">{rating}</div>
      </h3>
      <p>{shifting}</p>
      <p className="my-1">{status}</p>
      <p>{possibility}</p>
      <Link to={`product/${id}`}>
        <button className="mt-3 w-full rounded-md bg-[#E02C6D] p-2 text-[14px] font-semibold text-white   transition-all hover:bg-[#af2d5d] hover:tracking-tight">
          Show Details
        </button>
      </Link>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
