import React from "react"
import ReactDom from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Menu from "./components/Menu"
import About from "./pages/About"
import Contact from "./components/Contact"
import Reservation from "./pages/Reservation"
import Footer from "./components/Footer"
function App() {
  

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={< About />} />
        <Route path="/contact" element={< Contact />} />
        <Route path="/reservation" element={< Reservation />} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  )
}

export default App
