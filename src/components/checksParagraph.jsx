import "./checksParagraph.css";
import { useState } from "react";

const CheckParagraph = () => {
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [display, setDisplay] = useState("");
  const [display2, setDisplay2] = useState("")

  function handleSubmit() {
    setDisplay(compareParagraphsred())
    setDisplay2(compareParagraphsGreen())
  }

  const compareParagraphsGreen = () => {
    const elementsgreen = [];

    const maxLength = Math.max(paragraph1.length, paragraph2.length)

    for (let i = 0; i < paragraph2.length; i++) {
      if (paragraph1[i] === undefined || paragraph1[i] !== paragraph2[i]) {
        elementsgreen.push(
          <span key={i} className="highlightGreen">
            {paragraph2[i]}
          </span>
        );
      } else {
        elementsgreen.push(<span key={i}>{paragraph1[i]}</span>);
      }
    }

    return elementsgreen;
  };




  const compareParagraphsred = () => {
    const elements = [];

    for (let i = 0; i < paragraph2.length; i++) {
      if (paragraph1[i] === undefined || paragraph1[i] !== paragraph2[i]) {
        elements.push(
          <span key={i} className="highlight">
            {paragraph2[i]}
          </span>
        );
      } else {
        elements.push(<span key={i}>{paragraph1[i]}</span>);
      }
    }

    return elements;
  };

  return (
    <div className="App">
      <h1>Character Comparison</h1>
      <div className="displayText">
        <textarea
          placeholder="Original Text"
          value={paragraph1}
          onChange={(e) => setParagraph1(e.target.value)}
          rows="5"
        />
        <textarea
          placeholder="Changed Text"
          value={paragraph2}
          onChange={(e) => setParagraph2(e.target.value)}
          rows="5"
        />
      </div>

      <div className="result" onClick={handleSubmit} style={{cursor: "pointer"}}>
        <h2>Find Difference:</h2>
        <div className="resultson">{display}</div>
        <div className="resultson">{display2}</div>
      </div>
    </div>
  );
};

export default CheckParagraph;
