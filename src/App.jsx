
import NavBar from './Compontes/NavBar'
import Main from './Compontes/Main'
import Image from './Compontes/Image'
import SearchBar from './Compontes/SearchBar'
import Footer from './Compontes/Footer'
import { Link } from 'react-router-dom'
import History from './Compontes/History'
import { Routes, Route } from "react-router-dom";

function App() {
 

  return (
    <div>
      <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/history' element={<History/>}/>
    </Routes>
    </div>
  )
}

export default App
