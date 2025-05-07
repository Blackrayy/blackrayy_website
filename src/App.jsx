// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/Homepage/Homepage';
// import Services from './Pages/Services/Services';
// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <HomePage/>
    <Routes>
    <Route path="/" element={<HomePage />} />
    {/* <Route path="/services" element={<Services />} /> */}
    {/* <Route path="/contact" element={<Contact />} /> */}
  </Routes>
  )
}

export default App
