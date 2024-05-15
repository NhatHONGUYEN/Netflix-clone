import requests from "../Request";
import Main from "../components/Main";
import RowComponent from "../components/RowComponent";

export default function Home() {
  return (
    <>
      <Main />
      <RowComponent
        rowID="1"
        title="Up Coming"
        fetchURL={requests.requestUpComing}
      />
      <RowComponent
        rowID="2"
        title="Popular"
        fetchURL={requests.requestPopular}
      />
      <RowComponent
        rowID="3"
        title="TopRated"
        fetchURL={requests.requestTopRated}
      />
      <RowComponent
        rowID="4"
        title="Trending"
        fetchURL={requests.requestTrending}
      />
      <RowComponent rowID="5" title="Anime" fetchURL={requests.requestAnime} />
    </>
  );
}
