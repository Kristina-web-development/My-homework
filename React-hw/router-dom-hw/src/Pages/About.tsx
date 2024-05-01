import React from "react";
import HeaderOfAbout from "../Components/HeaderOfAbout";
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <HeaderOfAbout />
      <Link to="/about/123/pppp">To-123</Link> {/* id = 123*/}
      <Link to="/about/456">To-456</Link> {/* id = 456*/}
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default About;