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
  const handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const  selectedCountry = e.target.value;

    const filteredCountries = dataFlag.filter((country) =>
    country.name.toLowerCase() === selectedCountry.toLowerCase()
  );
  setFlags(filteredCountries);

  };

  const names = Array.from(new Set(dataFlag.map((country) => country.name)));

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
      <select onChange={handleSelectChange}>
      <option value="selectCountry">Select Region</option>
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
</select>    {/* Создать select + options */}
      </div>
    </header>
  );
};

export default Header;
