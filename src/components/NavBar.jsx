import { Link, useNavigate } from "react-router-dom";
import UserAuth from "../context/AuthContext";

export default function NavBar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full justify-between items-center p-4 z-[100] absolute align-center">
      <Link to="/">
        <h1 className="text-red-600 text-xl font-bold cursor-pointer ">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div className="text-xs">
          <Link to="/account">
            <button className="text-white pr-4  ">Account</button>
          </Link>

          <button
            onClick={handleLogOut}
            className="text-white px-4 py-2 cursor-pointer  bg-red-600  rounded "
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="text-xs">
          <Link to="/login">
            <button className="text-white pr-4  ">Sign In</button>
          </Link>
          <Link to="/signUp">
            <button className="text-white px-4 py-2 cursor-pointer  bg-red-600  rounded ">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
