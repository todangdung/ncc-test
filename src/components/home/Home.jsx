import React from "react";
import Item from "./Item";

import Icon1 from "../../image/icon1.png";
import Icon2 from "../../image/icon2.png";
import Icon3 from "../../image/icon3.png";

import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Item image={Icon1} />
      <Item image={Icon2} />
      <Item image={Icon3} />
    </div>
  );
};

export default Home;
