import React from "react";
import { useParams } from "react-router-dom";

const IdPage = () => {
    const {id, postId} = useParams()
    console.log(id)
  return (
    <h1>
      IdPage: id
      {postId ? <p>postId: {postId}</p> : null }
    </h1>
  );
};

export default IdPage;
