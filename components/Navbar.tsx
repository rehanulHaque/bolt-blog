import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="nav-logo">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.jpg"} width={50} height={50} alt="logo"/>
          <h1 className="text-3xl font-bold">Bolt Blog</h1>
        </Link>
      </div>
      <div className="text-2xl flex gap-4">
        <Link href={"/"}>
          <FaHome className="hover:text-gray-400 transition-all" />
        </Link>
        <Link href={"https://github.com/rehanulHaque"} target="_blank">
          <FaGithub  className="hover:text-gray-400 transition-all"/>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
