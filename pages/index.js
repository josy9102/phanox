import React from "react";
//import { Typography } from "antd";
//import { Footer, Header } from "antd/es/layout/layout"; // later on you can try using this components from antd and modifying
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  //const { Title, Text } = Typography; // do it later on

  const dummyProducts = ["Product 1", "Product 2"];

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}></HeroBanner>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product>{product.name}</Product>
        ))}
      </div>
      <FooterBanner>Footer</FooterBanner>
    </>
  );
};

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await client.fetch(productQuery);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
