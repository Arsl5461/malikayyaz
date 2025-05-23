import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from "./pages/About"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

    </>
  )
}

export default App
