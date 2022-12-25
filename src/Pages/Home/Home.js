import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <MenuCategory />
    </Layout>
  );
};

export default Home;
