import React from "react";
import Logo from "../../assets/abg-hire-logo.png";
import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="headerMenu">
        <div className="logoHeader">
          <Link to="/">
            <img className="logoImage" alt="Header Logo" src={Logo} />
          </Link>
        </div>
        <div className="menuItems">
          <ul>
            <Link to="/accounts">
              <li>Authentication</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
