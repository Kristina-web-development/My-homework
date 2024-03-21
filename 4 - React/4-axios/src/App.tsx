import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import PostItem from "./Components/PostItem";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  name: string;
  email: string;
  body: string;
}
function App() {
  // GET
  // делает запрос на сервер(API) и получает информацию !!не давая никакой информации серверу!!

  //const {data} = await axios.get("...api...")

  // POST
  // делает запрос на сервер(API) включая в себя информация - например добавить нового юзера

  //const {data} = await axios.post("...api...", {data of new user like: username, age}) -> _id, username, age

  // PUT
  // делает запрос на сервер(API) включая в себя информацию новых данных но делаю изменение в старом обьекте - например поменять имя юзера
  // если на сервере юзер не найден, запрос PUT создаст нового юзера

  //const {data} = await axios.put("...api...", {data of user that we want to change and his id like: id, username}) -> new obj: _id, username, age || _id, username

  // PATCH
  // делает запрос на сервер(API) включая в себя информацию новых данных но делаю изменение в старом обьекте - например поменять имя юзера
  // если на сервере юзер не найден, запрос PATCH !не будет создавть нового юзера а вернет "юзер не найден"

  // const {data} = await axios.patch("...api...", {data of user that we want to change and his id like: id, username}) -> _id, username

  // DELETE
  // делает на сервер удалить данные - например удалить юзера

  // const {data} = await axios.delete("...api...", {data: {id}}) -> user deleted

  //TYPES OF REQUESTED DATA
  // body
  // axios.post("...api/path", {data})

  // params
  // axios.post("...api/path/123") - цифры в конце  - это params. они динамичны, каждый раз изменяется. По парамсу мой сервер знает, какаую информацию выдовать.
  // axios.post("...api/path/789")
  // axios.post("...api/path/654")

  // query
  // axios.post("...api/path?id=654")
  // axios.post("...api/path?name=Kristina")
  // axios.post("...api/path?name=Kristina&age=34")

  const [showPosts, setShowPosts] = useState<Array<IPost>>([]);
 

  const hendleGetPosts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(data);
    setShowPosts(data);
  };



  useEffect(() => {
    hendleGetPosts();
  }, []);

  return (
    <>
      <h1>AXIOS</h1>
      {showPosts.length > 0 &&
        showPosts.slice(0, 9).map((post) => (
          <PostItem key={post.id} post={post} setShowPosts={setShowPosts}/>
        ))}
    </>
  );
}

export default App;

/*
HOMEWORK!!
GET	/posts -> get all posts
GET	/comments?postId=1 -> get comments of postId 3/4
DELETE	/posts/1 -> delete post id 2/3/4
*/

/*
JSON

important!! 
NOT to end the object with (,)
NOT to close the object with (,)
  {
    "name":"Kristina",
    "age": 12
  }
*/
