import { useState } from 'react'
import './App.css'
import * as styles from "./style.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.exampleStyle}>
    <div className="App">
      쉼쉼 초기셋팅 use Vite Bundler
    </div> 
    </div>
  )
}

export default App
