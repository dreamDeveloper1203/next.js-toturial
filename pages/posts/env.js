import Head from "next/head";
import Container from "../../Components/container";

export default function FirstPost(props) {
  return (
    <>
      <Container>
        <Head>
          <title>Environment Variables</title>
        </Head>
        <h1>Database Credentials</h1>
        <p>Host: {props.username}</p>
        <p>Username: {props.username}</p>
        <p>Password: {props.password}</p>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
  };
}
