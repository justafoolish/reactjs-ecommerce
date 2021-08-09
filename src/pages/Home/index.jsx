import React from "react";
import { Hero, AdsBanner, Sponsor } from "../../components";
import ProductsSlider from "../../components/ProductsSlider";

function Home() {
  const product = [
    {
      id: 1,
      name: "Poop Camel Hoodie",
      price: "200000",
      imgUrl: ["https://i.ibb.co/3ftVfDp/h1a.png", "https://i.ibb.co/xLny4Kp/h1b.png"],
    },
    {
      id: 2,
      name: "Dark Camel Hoodie",
      price: "200000",
      imgUrl: ["https://i.ibb.co/rQqgCcj/h2a.png", "https://i.ibb.co/D5zg3j0/h2b.png"],
    },
    {
      id: 3,
      name: "Donut DirtyCoin Hoodie",
      price: "200000",
      imgUrl: ["https://i.ibb.co/RNtq4L7/h3a.png", "https://i.ibb.co/8mWW0JH/h3b.png"],
    },
    {
      id: 4,
      name: "22 DirtyCoin Hoodie",
      price: "200000",
      imgUrl: ["https://i.ibb.co/QXQhdhc/h5a.png", "https://i.ibb.co/VVfFW9C/h5b.png"],
    },
    {
      id: 5,
      name: "Steal Camel Hoodie",
      price: "200000",
      imgUrl: ["https://i.ibb.co/rtxfVVM/h4a.png", "https://i.ibb.co/rbqVSqX/h4b.png"],
    },
  ];
  return (
    <>
      <Hero />
      <AdsBanner />
      <div style={{ minHeight: "50vh" }}>
        <ProductsSlider HeaderTitle="Latest Products" Products={product} />
        <ProductsSlider HeaderTitle="Popular Products" Products={product} />
      </div>
      <Sponsor />
    </>
  );
}

export default Home;
