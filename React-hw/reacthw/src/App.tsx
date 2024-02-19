import { FC, useState } from "react";

import "./App.css";
import ImageItem from "./ImageItem";


interface Images {
  url: string;
  //id: number;
}
/*
2. Create a list (arrya) of images (url)
      2.1. Create an image component with props ({imageurl}) => <img src={} alt="" />
      2.2. Create an intarface of component props
      2.3. By using map show each image in the app component by using image component
*/
const App: FC = () => {

  const [imageUrls, setImageUrls] = useState<Images[]>()
  const btnChangeImage = "Change image"

  const imagesArray: Array<Images> = [
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

  {/* 
  1. use useState to change an image by press button next to the image that you want to change
*/}
  return <>
  <h1>List of images</h1>

<div id="container">
  {
    imagesArray.map((image, index)=> (
      <ImageItem key={index} url={image.url} />
    ))
  }  
</div>
<div id="btn">
<button onClick={()=>setNumber(number +1)}>{btnChangeImage}</button>
<button onClick={()=>setNumber(number +1)}>{btnChangeImage}</button>
<button onClick={()=>setNumber(number +1)}>{btnChangeImage}</button>
</div>
  </>;
};

export default App;
