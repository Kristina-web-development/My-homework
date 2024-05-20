import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import data from "../../assets/data.json";
import Header from "../Components/Header/Header";

const MainPage = () => {
  const [flags, setFlags] = useState(data.slice(0, 10));

  //console.log(data)

  const infoFlag = data.slice(0, 10); //Понять как можно посенять 10 на +10 и т.д.. useState()
  console.log(infoFlag);

  /*
    Мы хотим за раз показать только первые 10 елементов. 
    У нас есть кнопка которая позволяет посмотреть следущие 10 (т.е. за раз мы смотрим 20 и т.д.)
  */

  return (
    <>
      <Header dataFlag={data} setFlags={setFlags} />
      <main>
        {/* Создать новую компоненту для отдельной страны и флага и передать нужную информацию (через props) чтоб показать ее */}
        {flags.map((fl, index) => (
          <div key={index}>
            <h2>{fl.name}</h2>
          </div>
        ))}

        <button disabled>Show more</button>
      </main>
    </>
  );
};

export default MainPage;
