import { useState } from "react";

import "./URLShrinking.css";

const URLShrinking = () => {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShortenUrl = () => {
    if (customCode.length > 4) {
      setShortUrl(`https://cpt405.co/${customCode}`);
    } else {
      const id = Math.random().toString(36).substring(6);
      setShortUrl(`https://cpt405.co/${id}`);
    }
    console.log(shortUrl);
  };
  const handleLongUrlChange = (e) => {
    console.log(longUrl);
    setLongUrl(e.target.value);
  };

  return (
    <div className="shrink-url-form">
      <h1>Link Shrinker</h1>

      <div className="form-group">
        <label htmlFor="longURL">Long URL:</label>
        <input
          type="text"
          id="longURL"
          value={longUrl}
          onChange={handleLongUrlChange}
        />

        <label htmlFor="customCode">Enter short code</label>
        <input
          type="text"
          id="customCode"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        />
      </div>
      <button className="submit-btn" onClick={handleShortenUrl}>
        Shorten URL
      </button>

      <div className="result">
        <label htmlFor="shortUrl">Short URL:</label>
        <input type="text" id="shortUrl" value={shortUrl} readOnly />
      </div>
    </div>
  );
};

export default URLShrinking;
