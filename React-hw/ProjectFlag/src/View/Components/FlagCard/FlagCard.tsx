import React, { FC } from "react";
import "./FlagCard.css";
import {Link} from "react-router-dom";
interface IFlagCard {
  imgCountryFlag: string;
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCapital: string;
}

const FlagCard: FC<IFlagCard> = ({
  imgCountryFlag,
  countryName,
  countryPopulation,
  countryRegion,
  countryCapital,
}) => {
  return (
    //<section className="gallery">
    <Link to={`country/${countryName}`}>
      <div className="gallery__container">
        <div className="gallery__card">
          <img
            className="gallery__card-image"
            src={imgCountryFlag}
            alt={`${countryName} flag`}
            width={264}
            height={160}
          />
          <h3 className="gallery__card-name">{countryName}</h3>
          <p className="gallery__card-population">{countryPopulation}</p>
          <p className="gallery__card-region">{countryRegion}</p>
          <p className="gallery__card-capital">{countryCapital}</p>
        </div>
      </div>
    </Link>
    //</section>
  );
};

export default FlagCard;
