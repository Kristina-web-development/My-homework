import { FC, useContext } from "react";
import imageContext from "../useContext/imageContext";

interface IShowNewImage {
  setNewImage: Function;
}

const ShowImage: FC<IShowNewImage> = ({ setNewImage }) => {
  const image = useContext(imageContext);
  const handleNewImage = () => {
    const newImage = prompt("Enter image");
    setNewImage(newImage!);
  };

  return (
    <div>
      <h1>Image list</h1>
      <img src={image} alt="image of pic" />
      <button onClick={handleNewImage}>Insert image url</button>
    </div>
  );
};

export default ShowImage;
