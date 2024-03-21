//rafce

import { FC, useState } from "react";

interface CatImageProps {
  catUrl: string;
  index: number;
  setTitle: Function;
}

const CatImageItem: FC<CatImageProps> = ({ catUrl, index, setTitle }) => {
  const [url, setUrl] = useState<string>(catUrl);

  const hendleChengeCat = () => {
    const newCatUrl = prompt("Enter new URL");
    if (newCatUrl) return setUrl(newCatUrl);
    if (!newCatUrl) return alert("No url");
  };

  const hendleChengeTitle = () => {
    const newTitle = prompt("Enter new Title") as string;
    setTitle(newTitle);
  };

  return (
    <div key={index}>
      <img src={url} alt="cat" />
      <button onClick={hendleChengeCat}>Change the cat image</button>
      <button onClick={hendleChengeTitle}>Change the title</button>
    </div>
  );
};

export default CatImageItem;
