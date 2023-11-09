import { AiFillStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";
import { Link, useLoaderData, useParams } from "react-router-dom";
const ProductDetail = () => {
  const product = useLoaderData();
  const { id } = useParams();
  // console.log(typeof id);
  const idInt = parseInt(id);
  // console.log(typeof idInt);

  const ProductItem = product.find((item) => item.id === idInt);
  console.log(ProductItem);

  return (
    <div className="mx-auto max-w-[1200px] p-10">
      <h1 className="text-center text-2xl">Product: 0{id}</h1>{" "}
      <Link to="/">
        <button className="mt-3 rounded-md bg-[#E02C6D] p-2 text-[14px] font-semibold   text-white transition-all hover:bg-[#af2d5d]">
          Go To Home Page
        </button>
      </Link>
      <div className="mx-auto mb-10 mt-5 max-w-[500px] rounded-lg p-3 shadow-xl">
        <img
          className="mt-3 w-full"
          src={ProductItem.img}
          alt={ProductItem.title}
        />
        <h1 className="my-2 text-2xl">{ProductItem.title}</h1>
        <h2>${ProductItem.price}</h2>
        <h3 className="flex items-center">
          <div className="my-1 flex  text-[#FB8200]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <BsStarHalf />
          </div>
          <div className="my-1 ml-5">{ProductItem.rating}</div>
        </h3>
        <p>{ProductItem.shifting}</p>
        <p className="my-1">{status}</p>
        <p>{ProductItem.possibility}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
