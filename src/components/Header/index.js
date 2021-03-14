import React from 'react';
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import Logo from "constants/images/logos/logo_4.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ProductIcon from "constants/images/icons/product_icon_1.jpg";
import CategoryIcon from "constants/images/icons/category_icon.png";
import BrandIcon from "constants/images/icons/brand_icon_2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: 30,
  },
});

function Header() {
  const classes = useStyles();
  return (
    <div className="header">
      <div className="header__content">
      { /* Contact information */ }
        <div className="header__contact">
          <div className="header__info">
            <p>
              Monacrchshop@gmail.com <br/>
              Phone: 0396988709 <br/>
              Address: 251/6 Tran Ngoc Que, Ninh Kieu, Can Tho
            </p>
          </div>
          <div className="header__logo">
            <img
              className="header__logo__icon"
              src={Logo}
              alt=""
            />
          </div>
          <div className="header__signin">
            <p>Signin & signup</p>
          </div>
        </div>

        <div className="header__nav">

          { /*Navbar */ }
          <div className="header__card">
            <div className="header__nav__icon">
              <HomeIcon
                className="header__icon"
                fontSize="large"
              />
              <p className="header__label">Home</p>
            </div>
            <div className="header__nav__icon">
              <img 
                className="header__icon"
                src={ProductIcon}
                alt=""
              />
              <p className="header__label">Product</p>
            </div>
            <div className="header__nav__icon">
              <img 
                className="header__icon"
                src={CategoryIcon}
                alt=""
              />
              <p className="header__label">Category</p>
            </div>
            <div className="header__nav__icon">
              <img 
                className="header__icon"
                src={BrandIcon}
                alt=""
              />
              <p className="header__label">Brand</p>
            </div>
            <div className="header__nav__icon__last">
              <InfoIcon
                className="header__icon"
                fontSize="large"
              />
              <p className="header__label">About Us</p>
            </div>
          </div>

          { /* Search And Cart */ }
          <div className="header__search-cart">
            <div className="header__search">
              <input className="header__search__input" type="text" placeholder="Type value for searching"/>
              <SearchIcon className="header__search__icon" />
            </div>

            <div className="header__cart">
              <ShoppingCartIcon
                className="header__cart__item"
                fontSize="small"
              />
              <p className="header__cart__item">0</p>
              <p className="header__cart__item">0 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
