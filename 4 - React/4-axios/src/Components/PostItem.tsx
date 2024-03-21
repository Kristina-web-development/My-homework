import { FC, useState } from "react";
import { IPost } from "../App";
import axios from 'axios'

interface IPostItem {
    post: IPost
    setShowPosts: Function
}
const PostItem: FC<IPostItem> = ({ post, setShowPosts }) => {
  const [getComments, setGetComments] = useState<Array<IPost>>([]);

  const hendleGetComments = async (id: number) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`
    );

    console.log(data);
    setGetComments(data);
  };

  const hendleDeletePosts = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log("Post deleted:", id);
    setShowPosts((showPosts: Array<IPost>) => showPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <h2>{post.id}</h2>
      <p>{post.body}</p>
      <button onClick={() => hendleGetComments(post.id)}>Show comments</button>
      <button onClick={() => hendleDeletePosts(post.id)}>Delete</button>
      {getComments.length > 0 ? (
        <>
        <h3>Comments</h3>
          {getComments.map((comment, index) => (
            <div key={index}>
              <h2>{comment.name}</h2>
              <p>{comment.body}</p>
            </div>
          ))}
        </>
      ) : (
        <>No comments</>
      )}
    </div>
  );
};

export default PostItem;
