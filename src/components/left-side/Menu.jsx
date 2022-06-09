import React from "react";
import "./menu.scss";

const menu = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Services",
    path: "/services",
  },
  {
    display: "News",
    path: "/News",
  },
  {
    display: "Blog",
    path: "/blog",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const Menu = () => {
  return (
    <div className="menu left-side">
      {menu.map((item, index) => (
        <span key={index} className="menu-item">
          {item.display}
        </span>
      ))}
    </div>
  );
};

export default Menu;
