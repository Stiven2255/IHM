import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom' 
import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Service'
import ApiProducts from './components/ApiProducts'
import CompAPi from './components/CompAPi'
function App() {
  const [count, setCount] = useState(0)

  return (
        <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Service" element = {<Service/>}></Route>
          <Route path="/ApiProducts" element = {<ApiProducts/>}></Route>
          <Route path="/CompAPi" element = {<CompAPi/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
