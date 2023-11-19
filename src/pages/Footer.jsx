import {
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-[#0A0826] py-14 text-center text-white">
      <h1 className="text-2xl">Star Style Hub</h1>
      <p className="my-5 text-[13px] font-light">
        Copyright © {year} Star Style Hub <br /> All rights reserved
      </p>
      <div className="flex items-center justify-center gap-5">
        <AiOutlineInstagram className="h-8 w-8 cursor-pointer rounded-full bg-slate-500 p-[5px] " />
        <AiFillLinkedin className="h-8 w-8 cursor-pointer rounded-full bg-slate-500 p-[5px] " />
        <AiOutlineTwitter className="h-8 w-8 cursor-pointer rounded-full bg-slate-500 p-[5px] " />
        <AiFillYoutube className="h-8 w-8 cursor-pointer rounded-full bg-slate-500 p-[5px] " />
      </div>
    </div>
  );
};

export default Footer;
