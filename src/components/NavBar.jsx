export default function NavBar() {
  return (
    <div className="flex w-full justify-between items-center p-4 z-[100] absolute align-center">
      <h1 className="text-red-600 text-xl font-bold cursor-pointer ">
        NETFLIX
      </h1>
      <div className="text-xs">
        <button className="text-white pr-4  ">Sign In</button>
        <button className="text-white px-4 py-2 cursor-pointer  bg-red-600  rounded ">
          Sign Up
        </button>
      </div>
    </div>
  );
}
