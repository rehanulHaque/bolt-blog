import BLogPost from "@/components/BlogPost";
import ButtonSection from "@/components/ButtonSection";
import { client, getRefFromCategory } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
export const revalidate = 30;

interface BlogDataTypes {
  title: string;
  smallDescription: string;
  imageUrl: string;
  _createdAt: string;
  category: string;
  slug: string;
}

const getBlogs = async (categoryRef: string) => {
  const query = `*[_type == 'blog' && categoty._ref == '${categoryRef}']{
    title, smallDescription,
    "imageUrl": titleImage.asset._ref,
    _createdAt,
    "category" : categoty._ref,
    "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
};
const page = async ({ params }: { params: { id: string } }) => {
  const categoryRef = await getRefFromCategory(params.id);
  const blogs = await getBlogs(categoryRef);
  return (
    <>
    <div className="flex gap-4 items-center ">
    <Image src={'/logo.jpg'} width={50} height={50} alt="logo" className="nav-logo"/>
    <h1 className="text-3xl font-bold"><Link href="/">Bolt Blog</Link></h1>
    </div>
      <h3 className=" text-gray-400 mb-6 mt-4 flex gap-2 items-center text-lg">
        Home{" "}
        <span className="text-xs font-normal">
          <FaGreaterThan className="font-normal" />
        </span>{" "}
        {params.id}
      </h3>
      <ButtonSection/>
        {!blogs.length && <h1 className="text-2xl text-center mt-10">No Blogs releated to this category</h1>}
      <section className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 w-full">
        {blogs &&
          blogs.map((post: BlogDataTypes) => (
            <BLogPost key={post.title} {...post} />
          ))}
      </section>
    </>
  );
};

export default page;
