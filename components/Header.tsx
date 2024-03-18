import { heroHeading, heroPara, socialUrls } from "@/constants/constants";
import { SoclialType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="grid lg:grid-cols-2 md:grid-cols-1 w-full">
      <div className="">
        <h1 className="text-3xl font-bold">{heroHeading}</h1>
        <p className="mt-6">{heroPara}</p>
        <div className="flex gap-4 mt-4 text-2xl">
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
      </div>
      <div className="block h-72 px-10">
        <Image
          src={"/logo.jpg"}
          width={200}
          height={200}
          alt="logo"
          className="w-full h-full object-cover md:object-contain sm:object-contain nav-logo"
        />
      </div>
    </header>
  );
};

export default Header;
