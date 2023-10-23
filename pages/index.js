import Head from "next/head";
import Router from "next/router";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to next.js!</title>
      </Head>
      <div>Welcome to Next.js</div>
      <span
        onClick={() => Router.push("/?counter=1", undefined, { shallow: true })}
      >
        Reload
      </span>
      <br />
      <div>next stars: {props.stars}</div>
      <img src="/logo.png" alt="Next.js logo" />
    </>
  );
}

export async function getServerSideProps(conttxt) {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  return {
    props: { stars: json.stargazers_count },
  };
}

export default HomePage;
