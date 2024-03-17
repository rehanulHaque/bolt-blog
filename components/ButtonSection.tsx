import Link from "next/link";


const ButtonSection = () => {
  return (
    <section className="flex gap-4 flex-wrap mt-4 mb-4">
        <Link
          href={"/collection/coding"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          Coding
        </Link>
        <Link
          href={"/collection/fashion"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          Fashion
        </Link>
        <Link
          href={"/collection/self-improvement"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          Self Improvement
        </Link>
        <Link
          href={"/collection/engineering"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          Engeneering
        </Link>
        <Link
          href={"/collection/fitness"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          FItness
        </Link>
        <Link
          href={"/collection/others"}
          className="bg-zinc-500 text-black px-4 py-2 rounded-md hover:bg-zinc-300 transition-all"
        >
          Others
        </Link>
      </section>
  )
}

export default ButtonSection
