import { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import AddProduct from '../src/components/addProduct/addProduct'
import './App.css'

function App() {
  const [pag, setPag] = useState("home")

  return (
    <>
      <NavBar setPag={setPag}/>

      {pag === "addProduct" && <AddProduct/>}

    </>
  )
}

export default App
