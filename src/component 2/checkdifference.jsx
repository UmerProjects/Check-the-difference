import { useState } from "react";

import "./checkdifference.css";

const DiffChecker2 = () => {
  const [originalText, setOriginalText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [originalDiff, setOriginalDiff] = useState(null);
  const [changedDiff, setChangedDiff] = useState(null);

  const computeDiff = () => {
    const originalWords = originalText.split(/(\s+)/);
    const changedWords = changedText.split(/(\s+)/);

    const maxLength = Math.max(originalWords.length, changedWords.length);

    let originalResult = [];
    // console.log(originalResult);
    let changedResult = [];
    // console.log(changedResult);

    for (let i = 0; i < maxLength; i++) {
      const originalWord = originalWords[i] || "";
      const changedWord = changedWords[i] || "";

      if (originalWord !== changedWord) {
        // for white
        if (originalWord.trim() === "" && changedWord.trim() === "") {
          originalResult.push(
            <span key={i} className="diff-original">
              {originalWord.replace(/ /g, "\u00A0")}
            </span>
          );
          changedResult.push(
            <span key={i} className="diff-changed">
              {changedWord.replace(/ /g, "\u00A0")}
            </span>
          );
        } else {
          // Words are different
          if (originalWord.trim() !== "") {
            // console.log(`${originalWord}`)
            originalResult.push(
              <span key={i} className="diff-original">
                {originalWord}
              </span>
            );
          } else {
            originalResult.push(originalWord); // Include spaces without highlighting
          }

          if (changedWord.trim() !== "") {
            changedResult.push(
              <span key={i} className="diff-changed">
                {changedWord}
              </span>
            );
          } else {
            changedResult.push(changedWord); // Include spaces without highlighting
          }
        }
      } else {
        // Words or spaces are the same
        originalResult.push(originalWord);
        changedResult.push(changedWord);
      }
    }

    setOriginalDiff(originalResult);
    setChangedDiff(changedResult);
  };

  return (
    <div>
      <h1>Diff Checker</h1>
      <div className="displayText">
        <textarea
          placeholder="Original Text"
          rows={10}
          cols={30}
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
        <textarea
          placeholder="Changed Text"
          rows={10}
          cols={30}
          value={changedText}
          onChange={(e) => setChangedText(e.target.value)}
        />
      </div>
      <button onClick={computeDiff}>Compare</button>
      <div className="diff-container">
        <div className="diff-block">
          <h2>Removed Text</h2>
          <div className="diff-result">{originalDiff}</div>
        </div>
        <div className="diff-block">
          <h2>Added Text</h2>
          <div className="diff-result">{changedDiff}</div>
        </div>
      </div>
    </div>
  );
};

export default DiffChecker2;
