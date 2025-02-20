import React from 'react';
import { useState } from 'react'
import Header from './Header';
import Gameboard from './Gameboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
        <Header count={count} />
        <Gameboard count={count} setCount={setCount} />
    </div>
  )
}

export default App
