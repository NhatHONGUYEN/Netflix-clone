import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function RowComponent({ title, fetchURL, rowID }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft -= 1000;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + rowID);
    slider.scrollLeft += 1000;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title} </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cyrsor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cyrsor-pointer z-10 hidden group-hover:block "
          size={40}
        />
      </div>
    </>
  );
}

RowComponent.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
};
