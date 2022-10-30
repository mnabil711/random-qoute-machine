import { useState } from "react";
import "./App.css";
import QuoteBox from "./QuoteBox";
function App() {
  const [mainColor, setMainColor] = useState("#16a085");

  return (
    <div className="app" style={{ backgroundColor: mainColor }}>
      <div className="quote">
        <QuoteBox changeColor={(color) => setMainColor(color)} />
        {/* <p>by mnabil711</p> */}
        <span>by </span>
        <a href="https://github.com/mnabil711" target="_blank" rel="noreferrer">
          mnabil711
        </a>
      </div>
    </div>
  );
}

export default App;
