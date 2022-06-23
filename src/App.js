import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { MultipleCards } from "./components/cards";
import { SignUpForm } from "./components/forms";
import { MultipleCards2 } from "./components/cards";
import { MultipleCards3 } from "./components/cards";
import { LoginForm } from "./components/forms";
import { ContactForm } from "./components/forms";
import { HeroSection } from "./components/Hero";
import { NavBar } from "./components/Nav";
import { BtnStyle1 } from "./components/Button";
import { BtnStyle2 } from "./components/Button";
import { BtnStyle3 } from "./components/Button";
import { BtnStyle4 } from "./components/Button";
import { Footer } from "./components/Footer";

import HomePage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";
import Cart from "./pages/Cart";
import AboutUs from "./pages/AboutUs";
import ProductsPage from "./pages/Products";
import LearnerHubPage from "./pages/LearnersHub";
import SignUpPage from "./pages/SignUp";
import LoginPage from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Footer />
      <BtnStyle1 />
      <BtnStyle2 />
      <BtnStyle3 />
      <BtnStyle4 />
      <ContactForm />
      <MultipleCards />
      <MultipleCards2 />
      <MultipleCards3 />
      <SignUpForm />
      <HeroSection />
      <NavBar />
      <LoginForm />

      <Routes>
        <Route path="Login" element={<LoginPage />} />
        <Route path="SignUp" element={<SignUpPage />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="About" element={<AboutUs />} />
        <Route path="Products" element={<ProductsPage />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="Learners" element={<LearnerHubPage />} />
        <Route path="Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default App;
