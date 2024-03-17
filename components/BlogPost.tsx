import { getCategoryFromRef, urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import { formatDistance } from "date-fns";
import Link from "next/link";

interface PropsTypes {
  title: string;
  smallDescription: string;
  imageUrl: string;
  _createdAt: string;
  category: string;
  slug: string;
}

const BLogPost = async ({
  title,
  smallDescription,
  imageUrl,
  _createdAt,
  category,
  slug
}: PropsTypes) => {
  const formattedDate = formatDistance(_createdAt, new Date(), {
    addSuffix: true,
  });
  const categotyName = await getCategoryFromRef(category);
  return (
    <div className="w-full">
      <Link href={`/blog/${slug}`}>
      <Image
        src={urlFor(imageUrl).url()}
        alt={title}
        width={400}
        height={400}
        className="rounded-md mb-2 w-full"
      />
      <p className="text-gray-400 capitalize my-3">
        {categotyName} {formattedDate}
      </p>
      <h2 className="text-3xl font-bold ">{title.substring(0, 60)}</h2>
      <p className="my-3">{smallDescription.substring(0, 200)}</p>
      </Link>
    </div>
  );
};

export default BLogPost;
