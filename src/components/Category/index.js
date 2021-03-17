import React from 'react';
import './Category.css';
import MenImage from '../../constants/images/men/men_img_1.jpg';
import WomenImage from '../../constants/images/women/women_2.jpg';
import ShoesImage from '../../constants/images/shoes/shoes_2.jpg';
import StyleImage from '../../constants/images/styles/style_1.jpg';

export default function Category() {
  return (
    <div className="category">
      <div className="control__row__one">
        <div
          className="img1 row__item"
          style={{
            backgroundImage: `url(${MenImage})`,
            backgroundSize: "cover",
          }}
        >
          <p className="label">MAN</p>
        </div>
        <div
          className="img2 row__item"
          style={{
            backgroundImage: `url(${ShoesImage})`,
            backgroundSize: "370px 270px",
            backgroundPosition: "center center",
          }}
        >
          <p className="label">SHOES</p>
        </div>
      </div>
      <div className="control__row__two">
        <div
          className="img3 row__item"
          style={{
            backgroundImage: `url(${StyleImage})`,
            backgroundSize: "650px 240px",
            backgroundPosition: "center center",
          }} 
        >
          <p className="label">ALBUM</p>
        </div>
        <div
          className="img4 row__item"
          style={{
            backgroundImage: `url(${WomenImage})`,
            backgroundSize: "cover",
          }}
        >
          <p className="label">WOMEN</p>
        </div>
      </div>
    </div>
  )
}
