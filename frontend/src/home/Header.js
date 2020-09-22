import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <p>AVIATO</p>
        <img src="https://pngimg.com/uploads/jet_fighter/jet_fighter_PNG34.png" />
      </div>
      <div className="header__navbar">
        <ul>
          <li>
            <span className="explore">EXPLORE</span>
          </li>
          <li>
            <span className="shop">SHOP</span>
          </li>
          <li>
            <span className="login">LOGIN</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
