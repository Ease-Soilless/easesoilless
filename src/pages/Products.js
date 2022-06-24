import React from "react";
import { MultipleCards4 } from "../components/cards";
import { NavBar } from "../components/Nav";
import { Footer } from "../components/Footer";

const ProductsPage = () => {
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <NavBar />
        <MultipleCards4 />
        <Footer />
      </div>
    </div>
  );
};

export default ProductsPage;
