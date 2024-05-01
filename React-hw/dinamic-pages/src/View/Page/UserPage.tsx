import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../App";

const UserPage = () => {
  const { id } = useParams();

  // const user = data.filter(user => { return user.id === Number(id)})

  const user1 = data.find((user) => {
    return user.id === Number(id);
  });
  /* use useParams() to get the needed id of the user*/
  /* Show one user from the data array (filter)*/
  return (
    <>
      <div>UserPage</div>
      <div>
        <h1>{user1.name}</h1>
        <h3>age: {user1.age}</h3>
      </div>
    </>
  );
};

export default UserPage;
