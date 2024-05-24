import React, {FC} from 'react'
//import "./FlagCards.css" 

interface IFlagCard {

imgCountryFlag: string;
countryName: string;
countryPopulation: number;
countryRegion: string;
countryCapital: string;
}

const FlagCard: FC<IFlagCard>  = ({imgCountryFlag, countryName, countryPopulation, countryRegion, countryCapital}) => {
  return (
    
    <div>
      <img src={imgCountryFlag} alt={`${countryName} flag`} width={264} height={160} />
      <h3>{countryName}</h3>
      <p>{countryPopulation}</p>
      <p>{countryRegion}</p>
      <p>{countryCapital}</p>
    </div>
  )
}

export default FlagCard