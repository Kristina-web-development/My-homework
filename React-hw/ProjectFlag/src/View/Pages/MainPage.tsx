import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import data from "../../assets/data.json";
import FlagCard from "../Components/FlagCard/FlagCard";
import Header from "../Components/Header/Header";

const MainPage = () => {
  const [countOfFlags, setCountOfFlags] = useState(10);
  const [flags, setFlags] = useState(data.slice(0, countOfFlags));

  useEffect(() => {
    setFlags(data.slice(0, countOfFlags));
  }, [countOfFlags]);

  return (
    <>
      <Header dataFlag={data} setFlags={setFlags} />
      <main>
       {/* 
       1. Закончить домашку с прошло урока (находиться в Header)
       2. Сделать стили флага
       3. Сделать грид на главной странице как в дезайне фигма
       */}
        {flags.map((fl, index) => (
          <FlagCard
            imgCountryFlag={fl.flags.svg}
            countryName={fl.name}
            countryPopulation={fl.population}
            countryRegion={fl.region}
            countryCapital={fl.capital}
          />
        ))}

        <button onClick={() => setCountOfFlags(countOfFlags + 10)}>
          Show more
        </button>
      </main>
    </>
  );
};

export default MainPage;
