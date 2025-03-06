import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header';
import Gameboard from './Gameboard';
import ReactConfetti from 'react-confetti';

function App() {
  const [count, setCount] = useState(0);
  const [matches, setMatches] = useState(0);
  // get the recordScore from local storage
  const [recordScore, setRecordScore] = useState(() => {
        const storedRecord = localStorage.getItem('recordLow');
        return storedRecord ? parseInt(storedRecord) : 50;
    });

  console.log("lowScore", recordScore, "count is now", count, "matches is ", matches);
  let recordGameOver = (matches == 12 && count < recordScore);

  useEffect(() => {
    if (matches == 12) {
        if (count < recordScore) {
            console.log("NEW LOW SCORE");
            localStorage.setItem('recordLow', count.toString());
        }
    } 
  }, [count]);

  return (
    <>
        {recordGameOver && <ReactConfetti />}
        <div className="app-container">
            <Header count={count} recordScore={recordScore} />
            <Gameboard count={count} setCount={setCount} matches={setMatches} setMatches={setMatches} />
        </div>
    </>
  )
}

export default App