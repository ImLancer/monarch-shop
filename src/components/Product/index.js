import React from 'react';
import './Product.css';

function Product({title, price, color, img}) {
  return (
    <div className="product">
      {console.log(img)}
      <img
        src={img}
        className="product__image"
        width="150px"
        height="150px"
        alt=""
      />
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">{price}</p>
        <div className="color__box">
          <span>Color:</span>
        {
          color.map(index => (
            <p
              className="color__item"
              style={{
                backgroundColor: `${index}`,
                paddingRight: "2px",
              }}
            >
            </p>
            )
          )
        }
        </div>
      </div>
      
    </div>
  )
}

export default Product
