import PropTypes from "prop-types";

import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Product = ({ product }) => {
  const { title, img, price, possibility, status, shifting, rating  } = product;
  console.log(rating)
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
        <div className="ml-5 my-1">{rating }</div>
      </h3>
      <p>{shifting}</p>
      <p className="my-1">{status}</p>
      <p>{possibility}</p>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object,
};

export default Product;
