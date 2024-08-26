
import { useState } from "react";

import './diffOfchecker.css'


const DiffChecker = () => {
    const [originalText, setOriginalText] = useState('');
    const [changedText, setChangedText] = useState('');
    const [originalDiff, setOriginalDiff] = useState(null);
    const [changedDiff, setChangedDiff] = useState(null);
  
    const computeDiff = () => {
      const originalWords = originalText.split('');
      const changedWords = changedText.split('');
      const maxLength = Math.max(originalWords.length, changedWords.length);
      let originalResult = [];
      let changedResult = [];
  
      for (let i = 0; i < maxLength; i++) {
        if (originalWords[i] !== changedWords[i]) {
          if (originalWords[i] !== undefined) {
            originalResult.push(
              <span key={`original-${i}`} className="diff-original">
                {originalWords[i]}
              </span>
            );
          }
          if (changedWords[i] !== undefined) {
            changedResult.push(
              <span key={`changed-${i}`} className="diff-changed">
                {changedWords[i]}
              </span>
            );
          }
        } else {
          originalResult.push(
            <span key={`equal-original-${i}`} className="diff-equal">
              {originalWords[i]}
            </span>
          );
          changedResult.push(
            <span key={`equal-changed-${i}`} className="diff-equal">
              {changedWords[i]}
            </span>
          );
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
          rows={50}
          cols={50}
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
        />
        <textarea
          placeholder="Changed Text"
          rows={10}
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
  
  export default DiffChecker;