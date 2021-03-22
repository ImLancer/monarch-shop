import React from 'react';
import './Banner.css';
import BannerImage from "../../constants/images/banners/banner_7.jpg";
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import SquareIcon from '@material-ui/icons/CropSquare';

function Banner() {
  return (
    <div 
      className="banner"
      style={{
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div></div>
      <div className="arrow__icon">
        {/* <ArrowBackIcon  className="icon__item"/>
        <ArrowForwardIcon className="icon__item"/> */}
      </div>
      <div className="mini__slide__icon">
          <SquareIcon className="slide__item slide__item__active" fontSize="small"/>
          <SquareIcon className="slide__item" fontSize="small"/>
          <SquareIcon className="slide__item" fontSize="small"/>
        </div>
    </div>
  )
}

export default Banner
