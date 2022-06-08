import React from "react";
import "./header.css";

import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header-img">
        <img src="./collection/banner/top-banner.png" alt="no photo" />
      </div>
      <div className="header-body">
        <div className="header-logo">
          <Link to="/">
            <img src="./collection/banner/logo2.jpg" alt="no photo" />
          </Link>
        </div>
        <div className="header-search">
          <input type="text" className="header-search-input" placeholder="Search...." />
          <button className="header-search-btn">Search</button>
        </div>
        <div className="header-items">
          <div className="register">
            <Link to="/register">Register</Link>
          </div>
          <div className="login">
            <Link to="/login">Login</Link>
          </div>
          <div className="cart">
            <Link to="/checkout" className="cart-link">
              <i class="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
              Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
              {/* <span className="cart-number">0</span> */}
            </Link>
          </div>
        </div>
      </div>
      <div className="header-nav">
        <Link to="/">Shop by Category</Link>
        <a href="">Today's Deal</a>
        <a href="">Top Selection</a>
        <a href="">Free Shipping</a>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/faq">FAQ</Link>
      </div>
    </div>
  );
};

export default Header;
