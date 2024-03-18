import { buttons } from "@/constants/constants";
import { BtnTypes } from "@/types/types";
import Link from "next/link";

const ButtonSection = () => {
  return (
    <section className="flex gap-4 flex-wrap mt-4 mb-4">
      {buttons.map((btn: BtnTypes) => (
        <Link
        key={btn.idx}
        href={btn.url}
        className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
      >
        {btn.text}
      </Link>
      ))}
      </section>
  )
}

export default ButtonSection
