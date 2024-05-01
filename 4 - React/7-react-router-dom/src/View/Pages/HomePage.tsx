import React from "react";
import HomePageImage from "../Components/HomePageImage";
import HomePageText from "../Components/HomePageText";
import {Link} from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h2>oijewrijgjpeirjgpegr</h2>
      <HomePageText />
      <HomePageImage />
      <Link to="/about">About Page</Link>
    </>
  );
};

export default HomePage;
