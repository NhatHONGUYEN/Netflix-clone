import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

export default function RowComponent({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title} </h2>
      <div className="relative flex items-center">
        <div id={"slider"}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
}

RowComponent.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired,
};
