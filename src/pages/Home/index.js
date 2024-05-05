import React from "react";

import Contact from "../Contact";
import {  Banner, Service } from "../../components";
import Androidapp from "../Androidapp";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <Service />
      <Androidapp/>
      <Contact />
    </div>
  );
};

export default Home;