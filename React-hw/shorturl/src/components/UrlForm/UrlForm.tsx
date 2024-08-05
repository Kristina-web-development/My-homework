import React, { useEffect, useState } from "react";
import axios from "axios";
import Url from "../Url/Url";

export interface IUrlObj {
  longUrl: string;
  shortUrl: string;
}
const UrlForm = () => {
  const [url, setUrl] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [shortUrls, setShortUrls] = useState<Array<IUrlObj>>([
    { longUrl: "ergerg", shortUrl: "rgergerg" },
  ]);
  const [error, setError] = useState<string>("");

  const validateUrl = (url: string) => {
    const regex =
      /^(https?:\/\/)?([a-z\d]([a-z\d-]*[a-z\d])?\.)+[a-z]{2,}(\/[^\s]*)?$/i;
    return regex.test(url); // true/false
  };

  const handleGetUrl = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const inputUrl = ev.target.value;
    if (validateUrl(inputUrl)) {
      setError("");
      setUrl(inputUrl);
    } else {
      setError("Invalid URL");
    }
  };

  const handleGetShortenUrl = async (
    ev: React.MouseEvent<HTMLButtonElement>
  ) => {
    ev.preventDefault();
    if (url.trim() !== "" && !error) {
      try {
        setLoader(true);
        const { data } = await axios.post(
          "https://short-url-api-gamma.vercel.app/shorten-url",
          { url }
        );

        setShortUrls([...shortUrls, { longUrl: url, shortUrl: data.shortUrl }]); // assuming the API returns the shortened URL in data.shortUrl
      } catch (error) {
        console.error("Error shortening URL:", error);
        setError("Server Error Shortening URL");
      } finally {
        setLoader(false);
      }
    } else {
      setError("Url not Good");
    }
  };

  const handleDeleteShortUrl = (id: number) => {
    setShortUrls(
      shortUrls.filter((srl, index) => {
        return index != id;
      })
    );
  };

  return (
    <section>
      <form>
        <input
          type="url"
          placeholder="Shorten a link here..."
          onChange={handleGetUrl}
        />
        <button
          onClick={handleGetShortenUrl}
          disabled={loader} //dis=true / dis=false
        >
          {loader ? "Loading..." : "Shorten it!"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <section>
        {shortUrls.map((srl, index) => (
          <Url key={index} srl={srl} index={index} handleDeleteShortUrl={handleDeleteShortUrl}/>
        ))}
      </section>
    </section>
  );
};

export default UrlForm;
