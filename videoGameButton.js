import React from 'react'
import { useState } from 'react'

function videoGameButton() {

    const [gameRunning, setgameRunning] = useState(true);

    function handleClick ()  {
        setgameRunning(!gameRunning)
    }



  return (
    <div>
      <button onClick={handleClick}>{gameRunning ? "Pause" : "Play"}</button>
    </div>
  )
}

export default videoGameButton
