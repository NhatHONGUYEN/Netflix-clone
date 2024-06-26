import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import UserAuth from "../context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";

export default function SavedShow() {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();

  const slideLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (passedId) => {
    try {
      const result = movies.filter((movie) => movie.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">My Show </h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cyrsor-pointer z-10 hidden group-hover:block "
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative "
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${movie?.img}`}
                alt={movie?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className=" whitespace-normal flex justify-center items-center w-full h-full text-xs md:text-sm text-gray-300 ">
                  {movie?.title}
                </p>
                <p
                  onClick={() => deleteShow(movie.id)}
                  className="absolute top-4 right-4 text-gray-300"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
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
