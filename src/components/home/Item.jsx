import React from "react";

const Item = (props) => {
  return (
    <div className="item">
      <div className="item__title">Lorem ipsum dolor sit amet consectetur</div>

      <div className="item__content">
        <div className="item__content__image">
          <img src={props.image} alt="" />
        </div>
        <div className="item__content__desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dolorum
          vero sint quae. Excepturi perspiciatis ratione maiores sequi,
          dignissimos repellendus laboriosam velit eius? Possimus quam voluptas
          similique doloremque officia voluptatum. vero sint quae. Excepturi
          perspiciatis ratione maiores sequi, dignissimos repellendus laboriosam
          velit eius? Possimus quam voluptas similique doloremque officia
          voluptatum.
        </div>
      </div>
    </div>
  );
};

export default Item;
