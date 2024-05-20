import React, { FC } from "react";

interface IHeader {
  dataFlag: any;
  setFlags: Function;
}

const Header: FC<IHeader> = ({ dataFlag, setFlags }) => {
  const hendleSearch = (ev: React.ChangeEvent<HTMLInputElement>) => {
    //    console.log(ev.target.value);
    const searchText = ev.target.value;
    const searchedCountries = dataFlag.filter((country) =>
      country.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFlags(searchedCountries);
  };

  /*
   Создать функцию, которая будет принмать event (ev), важно типизировать его.
   В функции сделать фильктрацию по Ригиону и вернуть в setFlags отфилтрованый массив.
  */

  return (
    <header>
      <div>
        <input
          className="header__search"
          onChange={hendleSearch}
          placeholder="Search Country"
        />
      </div>
      <div>
          {/* Создать select + options */}
      </div>
    </header>
  );
};

export default Header;
