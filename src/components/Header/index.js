import React from 'react';
import "./Header.css";
import Logo from "constants/images/logos/logo_3.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import ProductIcon from "constants/images/icons/product_icon_1.jpg";
import CategoryIcon from "constants/images/icons/category_icon.png";
import BrandIcon from "constants/images/icons/brand_icon_2.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ArrowDownIcon from "@material-ui/icons/ArrowDropDown";

function Header() {
  return (
    <div className="header">
      <div className="header__content">
        <img
          className="header__logo"
          src={Logo}
          alt=""
        />

        <div className="header__right">
        { /* Contact information */ }
          <div className="header__contact">
            <p>Mail and phone</p>
          </div>

          { /* Middle Navbar */ }
          <div className="header__nav">
              <div className="header__home">
                <HomeIcon
                  className="header__home__icon"
                  fontSize="large"
                />
                <p className="header__home__label">Home</p>
              </div>

              <div className="header__product">
                <img 
                  className="header__product__icon"
                  src={ProductIcon}
                  alt=""
                />
                <p className="header__product__label">Product</p>
              </div>

              <div className="header__category">
                <img 
                  className="header__category__icon"
                  src={CategoryIcon}
                  alt=""
                />
                <ArrowDownIcon
                  className="header__brand__arrow"
                  fontSize="large"
                />
                <p className="header__category__label">Category</p>
              </div>

              <div className="header__brand">
                <img 
                  className="header__brand__icon"
                  src={BrandIcon}
                  alt=""
                />
                <ArrowDownIcon
                  className="header__brand__arrow"
                  fontSize="large"
                />
                <p className="header__brand__label">Brand</p>
              </div>

              <div className="header__info">
                <InfoIcon
                  className="header__info__icon"
                  fontSize="large"
                />
                <p className="header__info__label">About Us</p>
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
    </div>
  )
}

export default Header;
