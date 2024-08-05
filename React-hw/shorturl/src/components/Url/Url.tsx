import { FC } from "react";
import { IUrlObj } from "../UrlForm/UrlForm";

interface IUrl {
  srl: IUrlObj;
  index: number;
  handleDeleteShortUrl: (id: number) => void;
}
const Url: FC<IUrl> = ({ srl, index, handleDeleteShortUrl }) => {
  return (
    <section>
      <p>{srl.longUrl}</p>
      <p>{srl.shortUrl}</p>
      <button onClick={() => handleDeleteShortUrl(index)}>X</button>
    </section>
  );
};

export default Url;
