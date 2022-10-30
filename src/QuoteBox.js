import { FaQuoteLeft, FaTwitterSquare } from "react-icons/fa";
import "./QuoteBox.css";
import { useEffect, useState } from "react";

const QuoteBox = ({ changeColor }) => {
  const api = "https://type.fit/api/quotes";
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  const [newQuote, setNewQuote] = useState("");
  const [newColor, setNewColor] = useState("#16a085");

  const getQuote = () => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        setNewQuote(data[Math.floor(Math.random() * data.length)]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    changeColor(newColor);
  });

  const handleChange = () => {
    getQuote();
    setNewColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div id="quote-box">
      <FaQuoteLeft size="1.8em" color={newColor} />
      <span id="text" style={{ color: newColor }}>
        {newQuote.text}
      </span>
      <p id="author">{`- ${newQuote.author}`}</p>
      <div id="controls">
        <a
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
          title="Tweet this quote!"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${newQuote.text}" ${newQuote.author} `}
        >
          <FaTwitterSquare size="3em" color={newColor} />
        </a>
        <button
          id="new-quote"
          style={{ backgroundColor: newColor }}
          onClick={() => handleChange()}
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default QuoteBox;
