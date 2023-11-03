import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import navItems from "../../public";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="max-w-[1200px] mx-auto p-10">
      <div className="md:flex items-center justify-between  ">
        <div className="flex justify-between">
          <div
            className="text-3xl cursor-pointer md:hidden "
            onClick={() => setClick(!click)}
          >
            {click ? <AiOutlineClose /> : <HiOutlineMenuAlt2 />}
          </div>
          <h1 className="text-2xl font-bold">Influencer products</h1>
        </div>
        <nav
          className={`md:flex items-center list-none gap-5 absolute top-20 md:static  ${
            click ? "left-10" : "left-[-20%] md:left-0"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className="text-[17px] hover:text-[#E02C6D] transition-all  "
                href={item.path}
              >
                {item.name}
              </a>
            </li>
          ))}
          <FiSearch className="text-2xl" />
          <BsCartPlus className="text-3xl" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
