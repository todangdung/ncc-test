import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Menu from "./components/left-side/Menu";

import "./App.scss";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <div className="left-side">
        <Menu />
      </div>
      <div className="right-side">
        <div className="container">
          <Header />
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
