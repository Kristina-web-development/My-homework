import { FC } from "react";
import Path from "../../../assets/images/Path.svg";
import "./NavBar.css";

interface INavBar {
  setTheme: Function;
  theme: string;
}

const NavBar: FC<INavBar> = ({ setTheme, theme }) => {
  return (
    <nav className={theme == "dark" ? "darkthemeNavBar" : "lightthemeNavBar"}>
      <div>
        <p className="header__question">Where in the world?</p>
        <div className="header__theme">
          <button
            className="header__text"
            onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          >
            <div className="header__moon_white">
              <img src={Path} alt="moon" width={18} height={17} />
            </div>
            Dark Mode
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
