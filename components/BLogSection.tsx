import { client } from "@/lib/sanity";
import BLogPost from "./BlogPost";
import { BlogDataTypes } from "@/types/types";

const getPosts = async () => {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
        title, smallDescription,
          "imageUrl": titleImage.asset._ref,
          _createdAt,
          "category" : categoty._ref,
          "slug": slug.current
      }`;
  const data = await client.fetch(query);
  return data;
};

const BLogSection = async() => {
  const data = await getPosts();
  return (
    <section className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 w-full">
        {data.map((post: BlogDataTypes) => (
            <BLogPost key={post.title} {...post} />
        ))}
    </section>
  );
};

export default BLogSection;
