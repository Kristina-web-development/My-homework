import { FC } from "react";

interface ImageItemProps {
  url: string;
  id: number
}
const ImageItem: FC<ImageItemProps> = ({ url, id }) => {
  return <img id="img" src={url} alt="url of cat image" />;
};

export default ImageItem;
