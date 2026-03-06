import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./components/about/About"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/services/Services"
import Login from "./components/login/Login"
import Home from "./pages/Home"

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
