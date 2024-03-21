import { FC, useState } from "react";
import "./App.css";
import CatImageItem from "./CatImageItem";

interface IUrlObject {
  url: string
}

// interface IUrlNew extends IUrlObject{ // we can extend one interface to another
//    id: string
// }

type IUrlType = {
  url: string
}

// type NewType extends IUrlType = { // we CANNOT extend one type to another

// }

const App: FC = () => {
  const [title, setTitle] = useState<string>("Follow the cat");
  const catsArray:Array<IUrlType> = [
    {
      url: "https://hobby-puzzle.ru/images/product_images/popup_images/5149_0.png",
    },
    {
      url: "https://avatars.dzeninfra.ru/get-zen_doc/1714479/pub_5dfb4b2278125e00ae85f6f4_5dfb4f5fb477bf00afd11ac9/scale_1200",
    },
    {
      url: "https://hobby-puzzle.ru/images/product_images/popup_images/5149_0.png",
    },
  ];

  return (
    <>
      <h1>{title}</h1>
      {catsArray.map((cat, index) => (
        <CatImageItem catUrl={cat.url} index={index} setTitle={setTitle} />
      ))}
    </>
  );
};

export default App;
