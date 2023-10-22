import Link from "next/link";
import Head from "next/head";

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Welcome to next.js!</title>
      </Head>
      <div>Welcome to Next.js</div>
      <Link href="/posts/first">First Post</Link>
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
