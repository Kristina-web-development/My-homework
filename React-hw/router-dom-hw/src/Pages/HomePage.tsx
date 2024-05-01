import React from "react";
import HomePageImages from "../Components/HomePageImages";
import HomePageTest from "../Components/HomePageTest";
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h2></h2>
      <HomePageTest />
      <HomePageImages />
      <Link to="/about">About Page</Link>
    </>
  );
};

export default HomePage;