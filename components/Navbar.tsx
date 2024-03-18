import { socialUrls, title } from "@/constants/constants";
import { SoclialType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="nav-logo">
        <Link href={"/"} className="flex items-center gap-3">
          <Image src={"/logo.jpg"} width={50} height={50} alt="logo"/>
          <h1 className="text-3xl font-bold">{title}</h1>
        </Link>
      </div>
      <div className="text-2xl flex gap-4">
      {socialUrls.map((url: SoclialType) => (
            <Link
              key={url.idx}
              href={url.url}
              target="_blank"
              className="hover:text-gray-400 transition-all"
            >
              {<url.icon/>}
            </Link>
          ))}
      </div>
    </nav>
  );
};

export default Navbar;
