import { FC } from "react";
import Path from "../../../assets/images/Path.svg";
import "./NavBar.css";

const NavBar:FC = () => {
  return (
    <nav>
      <p className="header__question">Where in the world?</p>
      <div className="header__theme">
        <div className="header__moon_white">
          <img src={Path} alt="moon" width={18} height={17} />
        </div>
        <p className="header__text">Dark Mode</p>
      </div>
    </nav>
  );
};

export default NavBar;
