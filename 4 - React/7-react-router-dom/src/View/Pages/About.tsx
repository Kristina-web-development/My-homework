import React from "react";
import HeaderOfAbout from "../Components/HeaderOfAbout";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <p>About</p>
      <HeaderOfAbout />
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default About;
