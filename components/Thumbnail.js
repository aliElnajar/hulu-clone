import React from "react";
import Image from "next/legacy/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
const BASE_URL = "https://image.tmdb.org/t/p/original/";
import { forwardRef } from "react";
const Thumbnail = ({ item }, ref) => {
  const {
    backdrop_path: img,
    poster_path: img2,
    overview,
    title,
    original_title,
    release_date,
    vote_average,
    media_type,
  } = item;
  return (
    <div
      ref={ref}
      className="block group cursor-pointer p-2 transition-duration-200 ease-in transform 
    sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${BASE_URL}${img || img2}`}
        alt={title}
        className="rounded-md"
      />
      <div className="p-2">
        <p className="truncate max-w-xl">{overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {title || original_title}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {media_type && media_type}
          {release_date}
          <span>
            <ThumbUpIcon className="h-5 mx-2" />
          </span>
          <span>{vote_average}</span>
        </p>
      </div>
    </div>
  );
};

export default forwardRef(Thumbnail);
