import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Contact from "./Pages/Contact.jsx"
import Catalogue from "./Pages/Catalogue.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  )
}

export default App
