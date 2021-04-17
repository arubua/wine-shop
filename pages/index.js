import Layout from "../src/components/Layout";
import Home from "../src/components/Home";
import { Box, Heading, Link, Container } from "@chakra-ui/react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://storage.googleapis.com/wineshop-assets/wine-shop.json"
  );
  const data = await res.json();

  return {
    props: { data },
  };
};

export default function HomePage({ data }) {
  return (
    <Layout data={data}>
      <Home data={data} />
    </Layout>
  );
}
