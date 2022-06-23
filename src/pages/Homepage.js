import React from "react";
import { NavBar } from "../components/Nav";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/Hero";
import { MultipleCards } from "../components/cards";

const HomePage = () => {
  return (
    <div>
      <NavBar className="navagator" />
      <HeroSection />
      <div className="products">
        <br />
        <h2 className="text-white text-center m-3">Products and Services</h2>
        <MultipleCards />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
