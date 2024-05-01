import React from "react";
import { Link } from "react-router-dom";
import {data} from '../../App'

const HomePage = () => {
  /* Show each link to the user*/
  /* use data array to use each user id (map)*/
  console.log(data)
  return (
    <>
      <div>HomePage</div>
      {
        data.map((user)=>( 
          //to="user.id"
          <Link key={user.id} to={`/userpage/${user.id}`}>Link to {user.name}</Link>
        ))
      }
    </>
  );
};

export default HomePage;
