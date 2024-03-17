import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaInstagram } from "react-icons/fa";
const Header = () => {
  return (
    <header className="grid lg:grid-cols-2 md:grid-cols-1 w-full">
      <div className="">
        <h1 className="text-3xl font-bold">Learn From My Mistakes a journey to become a self taught developer</h1>
        <p className="mt-6">Posting blogs about Coding, Fashion, Self Improvement and more make sure to follow on my socials</p>
        <div className="flex gap-4 mt-4 text-2xl">
          <Link href={"https://instagram.com/rehan_._cr"} target="_blank"><FaInstagram className="hover:text-gray-400 transition-all"/></Link>
          <Link href={"https://github.com/rehanulHaque"} target="_blank"><FaGithub className="hover:text-gray-400 transition-all"/></Link>
        </div>
      </div>
      <div className="block h-72 px-10">
        <Image src={"/logo.jpg"} width={200} height={200} alt="logo" className="w-full h-full object-cover md:object-contain sm:object-contain nav-logo"/>
      </div>
    </header>
  )
}

export default Header
