import { useState } from 'react'
import './App.css'

export default function App() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="container">
      <h1 className="title">labo 02 cloud wa</h1>
      <button
        className={`fancy-btn ${clicked ? 'active' : ''}`}
        onClick={() => setClicked(c => !c)}
      >
        {clicked ? '🔥 ACTIVADO 🔥' : 'Presioname wey'}
      </button>
    </div>
  )
}
