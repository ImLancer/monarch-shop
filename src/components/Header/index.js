import React from 'react';
import "./Header.css";
import Logo from "constants/images/logos/logo_4.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ProductIcon from "constants/images/icons/product_icon_1.jpg";
import CategoryIcon from "constants/images/icons/category_icon.png";
import BrandIcon from "constants/images/icons/brand_icon_2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
      { /* Contact information */ }
        <div className="header__contact">
          <div>
            <p>Mail and phone</p>
          </div>
          <div>
            <img
              className="header__logo"
              src={Logo}
              alt=""
            />
          </div>
          <div>
            <p>Signin & signup</p>
          </div>
        </div>

        { /* Middle Navbar */ }
        <div className="header__nav">
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
        </div>

        { /* Search And Cart */ }
        <div className="header__search-cart">
          <div className="header__search">
            <input className="header_search_input" type="text" />
            <SearchIcon className="header__search__icon" />
          </div>

          <div className="header__cart">
            <ShoppingCartIcon
              className="header__cart__icon"
              fontSize="large"
            />
            <p className="header__cart__item">0</p>
            <p className="header__cart__price">0 $</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
