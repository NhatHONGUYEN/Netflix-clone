import SavedShow from "../components/SavedShow.jsx";

export default function Account() {
  return (
    <div className="w-full h-[550px] ">
      <div className="absolute w-full h-[550px] bg-black/60 "></div>
      <img
        className="w-full h-[550px] object-cover"
        src="/netflix image.jpg
  "
        alt="netflixImage"
      />
      <div className="absolute top-40 left-4 text-white text-3xl md:text-5xl font-bold">
        My Show
      </div>
      <SavedShow />
    </div>
  );
}
