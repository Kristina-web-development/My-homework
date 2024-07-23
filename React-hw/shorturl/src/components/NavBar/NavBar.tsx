import React from "react";
import "./NavBar.css";
import { HashLink } from "react-router-hash-link";
const NavBar = () => {
  return (
    <nav className="nav__bar">
      <div className="nav__bar_left">
        <h3 className="nav__bar_text">Shortly</h3>
        <p className="nav__bar_paragraph">Features</p>{" "}
        {/*<HashLink smooth to="/path#hash">
  Link to Hash Fragment
</HashLink>; */}
        <p className="nav__bar_paragraph">Pricing</p>
        <p className="nav__bar_paragraph">Resources</p>
      </div>
      <div className="nav__bar_right">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
