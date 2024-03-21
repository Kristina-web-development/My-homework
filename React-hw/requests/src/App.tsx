import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
function App() {
  const [count, setCount] = useState(0);
  const [showPosts, setShowPosts] = useState<Array<IPost>>([]);

  const hendleGetPost = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    setShowPosts(data);
  };

  useEffect(() => {
    hendleGetPost();
  }, []);

  return (
    <>
      {showPosts.length > 0 && (
        // showPosts.map((post, index) => (
        //   <div key={index}>
        //     <h2>{post.body}</h2>
        //     {/* <button onClick={() => setCount(count + 1)}>Next Post</button> */}
        //   </div>
        // ))
        <div>
          {showPosts[count].body}
          <button onClick={() => setCount(count + 1)}>Next Post</button>
        </div>
      )}
    </>
  );
}

export default App;
