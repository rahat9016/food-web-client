import React from "react";
import HealthyFood from "../../Components/HealthyFood/HealthyFood";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Layout from "../../Components/Layout/Layout";
import MenuCategory from "../../Components/MenuCategory/MenuCategory";
import Offers from "../../Components/Offers/Offers";
import Popular from "../../Components/Popular/Popular";
import TopSelling from "../../Components/TopSelling/TopSelling";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <MenuCategory />
      <Popular />
      <Offers />
      <HealthyFood />
      <TopSelling />
    </Layout>
  );
};

export default Home;
