import { useState } from 'react'
import './App.css'
import Recipes from '../Recipies';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
  <Recipes></Recipes>
   
   </div>
  )
}

export default App;
