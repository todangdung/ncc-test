import React from "react";
import "./header.scss";

import Logo from "../../image/NCClogo.png";
const Header = () => {
  return (
    <div className="logo">
      <div className="logo-content">
        <div className="logo-content__image">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="desc">
        <p className="title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p className="desc-content">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ad
          consequuntur facilis commodi repellat quisquam id culpa enim, ducimus
          praesentium eum, accusamus assumenda architecto labore! Rem dolores
          maxime repellat cumque.Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Atque ad consequuntur facilis commodi repellat
          quisquam id culpa enim, ducimus praesentium eum, accusamus assumenda
          architecto labore! Rem dolores maxime repellat cumque.Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Atque ad consequuntur
          facilis commodi repellat quisquam id culpa enim, ducimus praesentium
          eum, accusamus assumenda architecto labore! Rem dolores maxime
          repellat cumque.
        </p>
      </div>
    </div>
  );
};

export default Header;
