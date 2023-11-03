import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import navItems from "../../public";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="mx-auto max-w-[1200px] p-10">
      <div className="flex items-center justify-between md:flex">
        <div className="flex justify-between">
          <div
            className="cursor-pointer text-3xl md:hidden "
            onClick={() => setClick(!click)}
          >
            {click ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt2 />
            )}
          </div>
          <h1 className="hidden text-2xl  font-bold md:block">
            Influencer products
          </h1>
        </div>
        <nav
          className={`absolute top-20 list-none items-center gap-5 rounded-lg px-24 py-10 text-center shadow-lg   md:static md:left-[40%] md:flex md:rounded-none md:p-0   md:shadow-none ${
            click ? "" : "left-[-100%] md:left-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id} className="my-5 md:my-0 ">
              <a
                className="text-[17px]  transition-all hover:text-[#E02C6D]   "
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}
          <div className="flex items-center gap-4">
            <FiSearch className="text-2xl " />
            <BsCartPlus className="text-3xl" />
          </div>
        </nav>
        <BsCartPlus className="text-3xl md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
