import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])
  const [visible, setVisible] = useState(true);
  const [text, setText] = useState("Hello");

  useEffect(()=>{
    console.log('useEffect is working')
  },[todos])

  // https://www.codementor.io/@damianpereira/how-to-use-clearinterval-inside-react-s-useeffect-and-why-it-is-important-1si7mztjlk
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`Current blinking text: ${text}`);
      setVisible((visible) => !visible);
      setCount(count => count + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [text]);


  return (
    <>
      <h1>useEffect</h1>
      <h3>{count}</h3>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      {visible ? <h1>{text}</h1> : null}
      {/* <h3>{count}</h3>
      <button onClick={()=>setCount(count+1)}>+</button>
      <br/>
      <h4>To Dos</h4>
      <input type="text" onChange={(e)=>setTodos([...todos, e.target.value])}/>
      <ul>
        {todos.map((todo, index)=>{
          return <li key={index}>{todo}</li>
        })}
      </ul> */}
    </>
  )
}

export default App
