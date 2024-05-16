import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserAuth from "../context/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Failed to sign up");
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="hidden sm:block absolute w-full h-full object-cover"
        src="/netflix image.jpg"
        alt="netflix_image"
      />
      <div className="bg-black/60 w-full h-full fixed top-0 left-0"></div>
      <div className="fixed w-full px-4 py-24 z-50">
        <div className="rounded max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <div className="text-3xl font-bold  ">Sign Up</div>
            <form className="w-full flex flex-col py-4">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="bg-gray-700 p-3 my-2 rounded"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="bg-gray-700 p-3 my-2 rounded"
              />
              <button
                onClick={handleSubmit}
                className="bg-red-600 text-white py-3 my-6 font-bold rounded-md"
              >
                Sign Up
              </button>
              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>

              <p className="py-8">
                <span className="text-gray-600 mr-2">
                  {" "}
                  Already subscribed to Netflix?
                </span>

                <Link to="/signup">Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
