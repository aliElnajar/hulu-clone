import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import requests from "../utilities/requests";
import Movies from "../components/Movies";
export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="https://links.papareact.com/ua6" />
      </Head>
      <Header />
      <Navbar />
      <Movies data={data} />
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const genre = context.query.genre;
  const req = await fetch(
    `https://api.themoviedb.org/3/${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  );
  const data = await req.json();

  return {
    props: {
      data: data.results,
    },
  };
};
