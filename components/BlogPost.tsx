import { getCategoryFromRef, urlFor } from "@/lib/sanity";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";
import Link from "next/link";
import { PropsTypes } from "@/types/types";
import { FaCalendar } from "react-icons/fa";

const BLogPost = async ({
  title,
  smallDescription,
  imageUrl,
  _createdAt,
  category,
  slug,
}: PropsTypes) => {
  const formattedDate = format(new Date(_createdAt), "LLLL dd, yyyy");
  const categotyName = await getCategoryFromRef(category);
  return (
    <div className="w-full">
      <Link href={`/blog/${slug}`}>
        <Image
          src={urlFor(imageUrl).url()}
          alt={title}
          width={400}
          height={400}
          className="rounded-md mb-2 w-full h-[200px] lg:h-[260px] object-cover"
        />
        <p className="text-gray-400 capitalize my-3 flex gap-2 items-center">
          {<FaCalendar />} {formattedDate} - {categotyName}
        </p>
        <h2 className="text-3xl font-bold ">{title.substring(0, 60)}</h2>
        <p className="my-3">{smallDescription.substring(0, 200)}</p>
      </Link>
    </div>
  );
};

export default BLogPost;
