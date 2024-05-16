import { Link } from "react-router-dom";

export default function SignUp() {
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
            <div className="text-3xl font-bold  ">Sign In</div>
            <form className="w-full flex flex-col py-4">
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="bg-gray-700 p-3 my-2 rounded"
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="current-password"
                className="bg-gray-700 p-3 my-2 rounded"
              />
              <button className="bg-red-600 text-white py-3 my-6 font-bold rounded-md">
                Sign In
              </button>
              <div className="flex justify-between items-center text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>

              <p className="py-8">
                <span className="text-gray-600 mr-2">New to Netflix?</span>

                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
