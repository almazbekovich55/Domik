import React from "react";
import Welcome from "./welcome/Welcome";
import About from "./about/About";
import PopularProduct from "./popularProduct/PopularProduct";
import FAQ from "./faq/FAQ";
import Request from "./request/Request";
import Organize from "./organize/Organize";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <About />
      <PopularProduct />
      <Organize />
      <FAQ />
      <Request />
    </div>
  );
};

export default HomePage;
