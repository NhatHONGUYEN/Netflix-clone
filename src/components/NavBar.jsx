import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex w-full justify-between items-center p-4 z-[100] absolute align-center">
      <Link to="/">
        <h1 className="text-red-600 text-xl font-bold cursor-pointer ">
          NETFLIX
        </h1>
      </Link>
      <div className="text-xs">
        <Link to="/login">
          <button className="text-white pr-4  ">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="text-white px-4 py-2 cursor-pointer  bg-red-600  rounded ">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}
