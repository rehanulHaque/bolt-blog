import { client, getCategoryFromRef, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
export const revalidate = 30;

interface BlogTypes {
  title: string;
  content: any;
  imageUrl: string;
  category: string;
  slug: string;
}

const getBlog = async (slug: string) => {
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
        "slug": slug.current,
          title,
          content,
          "imageUrl": titleImage.asset._ref,
          "category": categoty._ref
    }[0]`;
  const data = await client.fetch(query);
  return data;
};
const page = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlog(params.slug);
  const categoryName = await getCategoryFromRef(blog.category);
  return (
    <article>
      <div className="flex gap-4 items-center ">
        <Image
          src={"/logo.jpg"}
          width={50}
          height={50}
          alt="logo"
          className="nav-logo"
        />
        <h1 className="text-3xl font-bold">
          <Link href="/">Bolt Blog</Link>
        </h1>
      </div>
      <h3 className=" text-gray-400 mb-6 mt-4 flex gap-2 items-center text-xs">
        Home{" "}
        <span className="text-xs font-normal">
          <FaGreaterThan className="font-normal" />
        </span>{" "}
        {categoryName}
      </h3>

      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <Image
        src={urlFor(blog.imageUrl).url()}
        width={500}
        height={500}
        alt={blog.title}
        className="w-full h-[300px] my-4 rounded-md mx-auto object-cover"
      />
      <div className="mt-10 prose prose-sm lg:prose-xl md:prose-lg prose-blue prose-invert ">
        <PortableText value={blog.content} />
      </div>
    </article>
  );
};

export default page;
