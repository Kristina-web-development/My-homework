import { FC } from "react";

interface ImageItemProps {
  url: string;
}
const ImageItem: FC<ImageItemProps> = ({ url }) => {
  return <img id="img" src={url} alt="url of cat image" />;
};

export default ImageItem;
