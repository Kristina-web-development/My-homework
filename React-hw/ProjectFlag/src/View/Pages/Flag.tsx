import React, { FC } from "react";
import callmade from "../../assets/images/callmade.svg";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../assets/data.json";
//import "./flag-style.css";

interface IFlag {
  setTheme: Function;
  theme: string;
}

const Flag: FC<IFlag> = ({ theme, setTheme }) => {
  const { countryName } = useParams();
  const countryChoosen = data.find((cont) => cont.name === countryName);
  const navigate = useNavigate();

  return (
    <div
      className={
        theme == "dark" ? "darkthemeBackGround" : "lightthemeBackGround"
      }
    >
      <button onClick={() => navigate(-1)}>
        <img src={callmade} alt="arrowback" width={20} height={20} />
        Back
      </button>
      {/* <button>
        {" "}
        <img src={callmade} alt="arrowback" width={20} height={20} />
        Back
  </button> */}
      <div className="country__container">
        <img
          src={countryChoosen.flags.svg}
          alt={`${countryChoosen.name} flag`}
          width={560}
          height={401}
        />
        <h1 className={theme == "dark" ? "lightText" : "darkText "}>
          {countryChoosen.name}
        </h1>
        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Native Name: {countryChoosen.nativeName}
        </p>
        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Population: {countryChoosen.population}
        </p>
        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Region: {countryChoosen.region}
        </p>
        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Subregion: {countryChoosen.subregion}
        </p>
        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Capital: {countryChoosen.capital}
        </p>
        <div>
          {countryChoosen.topLevelDomain.map((item) => (
            <p className={theme == "dark" ? "lightText" : "darkText"}>
              TopLevelDomain: {item}
            </p>
          ))}
        </div>

        <div>
          {countryChoosen.currencies.map((item) => (
            <p className={theme == "dark" ? "lightText" : "darkText"}>
              Currencies: {item.name}
            </p>
          ))}
        </div>

        {/* <div>
          {countryChoosen.languages.map((item) => (
            <p className={theme == "dark" ? "lightText" : "darkText"}>Languages: {item.name}</p>
          ))}
        </div> */}

        <p className={theme == "dark" ? "lightText" : "darkText"}>
          Languages:
          {countryChoosen.languages.map((item) => (
            item.name + ", "
          ))}
        </p>
      </div>
    </div>
  );
};

export default Flag;
