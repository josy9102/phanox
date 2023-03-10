import React from "react";
//import { Typography } from "antd";
//import { Footer, Header } from "antd/es/layout/layout"; // later on you can try using this components from antd and modifying
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";

const Home = () => {
  //const { Title, Text } = Typography; // do it later on

  const dummyProducts = ["Product 1", "Product 2"];

  return (
    <>
      <HeroBanner>Hero Banner</HeroBanner>
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {dummyProducts.map((product) => (
          <Product>{product}</Product>
        ))}
      </div>
      <FooterBanner>Footer</FooterBanner>
    </>
  );
};

export default Home;
