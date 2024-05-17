import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Request.jsx";

export default function Main() {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);

  const truncateString = (str, n) => {
    if (str?.length > n) {
      return str.slice(0, n) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] md:h-[800px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] md:h-[800px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title || movie?.name || movie?.original_name}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-xl md:text-3xl font-bold">{movie?.title} </h1>
          <div className="my-4">
            <button className="rounded border   bg-gray-300 text-black border-gray-300 py-2 px-5 md:text-xl">
              Play
            </button>
            <button className="rounded border   text-white border-gray-300 py-2 px-5 ml-4 md:text-xl">
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 md:text-xl ">
            Released : {movie?.release_date}{" "}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[40%] md:text-xl">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
}
