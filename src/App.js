import React from "react";
import "./App.css";
import { useShortenUrl } from "react-shorten-url";

const App = () => {
  const [url, setUrl] = React.useState("");
  const [shortUrl, setShortUrl] = React.useState("");

  const { loading, error, data } = useShortenUrl(url);

  if (loading) {
    return (
      <h2>
        <center>Loading...</center>
      </h2>
    );
  }
  if (error) {
    return (
      <h2>
        <center>Something went wrong</center>
      </h2>
    );
  }
  function urlHandler() {
    setShortUrl(data.link);
    setUrl("");
  }

  return (
    <div className="main">
      <h1>Url Shortener</h1>
      <div className="url-box">
        <label htmlFor="url">Long Url </label>
        <input
          type="text"
          name="url"
          placeholder="Enter long url..."
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={urlHandler}>Shorten</button>
      </div>
      <div className="short">
        <p>short url</p>
        <a href={shortUrl}>{shortUrl}</a>
      </div>
    </div>
  );
};

export default App;
