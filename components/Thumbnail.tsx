import Image from "next/image";
import { ResultsProps } from "./../pages/index";
import { ThumbUpIcon } from "@heroicons/react/outline";

export const Thumbnail = (props: { key: number; result: ResultsProps }): JSX.Element => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image layout="responsive" height={1080} width={1920} src={`${BASE_URL}${props.result.poster_path}`} />
      <div className="pt-2">
        <p className="truncate max-w-md">{props.result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {props.result.title || props.result.original_title}
        </h2>
        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {props.result.media_type && `${props.result.media_type}`}{" "}
          {props.result.release_date || props.result.first_air_date}
          <ThumbUpIcon className="h-5 mx-2" /> {props.result.vote_count}
        </p>
      </div>
    </div>
  );
};
