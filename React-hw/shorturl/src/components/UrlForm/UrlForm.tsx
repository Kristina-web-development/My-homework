import React, { useState } from "react";

const UrlForm = () => {
  const [url, setUrl] = useState<string>("");
  const [shortUrls, setShortUrls] = useState<Array<string>>([])

  const handleGetUrl = (ev: React.SyntheticEvent) => {
    //console.log(ev.target.value);
    // .... validation -> regex/npm package (search in internet)
    // if validation is true -> setUrl(ev.target.value);
    setUrl(ev.target.value);
  };

  const handleGetShortenUrl = async ()=> {
      console.log(url)
      const {data} = await axios.post("....url", {url})
      
      // url
      // axios.post("....", url)
      // axios will return shorter url, need to show it as list under the form
      // setShortUrls([...shortUrls, "..."])
  }
  return (
    <section>
      <form>
        <input
          type="url"
          placeholder="Shorten a link here..."
          onChange={handleGetUrl}
        />
        <button onClick={handleGetShortenUrl}>Shorten it!</button>
      </form>
      <section>
          {shortUrls.map(srl => (
              <section>
                  <p>{srl}</p>
              </section>
          ))}
      </section>
    </section>
  );
};

export default UrlForm;
