import requests from "../Request";
import Main from "../components/Main";
import RowComponent from "../components/RowComponent";

export default function Home() {
  return (
    <>
      <Main />
      <RowComponent title="Up Coming" fetchURL={requests.requestUpComing} />
      <RowComponent title="Popular" fetchURL={requests.requestPopular} />
      <RowComponent title="TopRated" fetchURL={requests.requestTopRated} />
      <RowComponent title="Trending" fetchURL={requests.requestTrending} />
      <RowComponent title="Anime" fetchURL={requests.requestAnime} />
    </>
  );
}
