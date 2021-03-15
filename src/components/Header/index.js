import React from 'react';
import "./Header.css";
import Logo from "constants/images/logos/logo_5.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
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
          <div className="header__login">
            <div className="header__login__icon">
              <AccountCircleIcon fontSize="large" />
              <p className="login__label">Guest</p>
            </div>
            <div className="header__login__item">
              <p className="login__label">Log In</p>
            </div>
            <div className="header__login__item--last">
              <p className="login__label">Sign Up</p>
            </div>
          </div>
        </div>

        <div className="header__nav">

          { /*Navbar */ }
          <div className="header__card header__card--active">
            <div className="header__nav__icon header__nav__icon--active">
              <HomeIcon
                className="header__icon"
              />
            </div>
            <div className="header__nav__icon header__nav__icon--first">
              <p className="header__label">Men</p>
              <ArrowDropDownIcon className="header__label__arrow"/>
            </div>
            <div className="header__nav__icon">
              <p className="header__label">Women</p>
              <ArrowDropDownIcon className="header__label__arrow"/>
            </div>
            <div className="header__nav__icon">
              <p className="header__label">Styles</p>
            </div>
            <div className="header__nav__icon">
              <p className="header__label">Sales</p>
            </div>
            <div className="header__nav__icon header__nav__icon--category">
              <p className="header__label">Categories</p>
              <ArrowDropDownIcon className="header__label__arrow"/>
            </div>
          </div>

          { /* Search And Cart */ }
          <div className="header__card header__search-cart">
            <div className="header__search">
              <input className="header__search__input" type="text" placeholder="Type value for searching"/>
              <SearchIcon className="header__search__icon" />
            </div>

            <div className="header__cart">
              <ShoppingCartIcon
                className="header__cart__item header__shopping__icon"
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
