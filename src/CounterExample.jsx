import { useState } from 'react'
import "./App.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="counter-container">      
        <button className='counter' onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
        </div>
    
    </>
  )
}

export default App
