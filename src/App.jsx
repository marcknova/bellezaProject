import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import MasNuevo from './pages/LomasNuevo'
import MasVendido from './pages/MasVendido'
import Blog from './pages/Blog'
import Cara from './pages/Cara'
import Labios from './pages/Labios'
import Ojos from './pages/Ojos'
import Navbar from './components/navbar/Navbar'

// colors
// ff97d9
// e5b3fe

function App() {
  return (
    <>
  <Navbar />
        <Routes>
          <Route path="/" >
            <Route index element={ <Inicio /> } />
            <Route path="/masnuevo" element={ <MasNuevo /> } />
            <Route path="/masvendido" element={ <MasVendido /> } />
            <Route path='/blog' element={ <Blog /> } />
            <Route path='/cara' element={ <Cara /> } />
            <Route path='/labios' element={ <Labios /> } />
            <Route path='/ojos' element={ <Ojos /> } />
          </Route>
          </Routes>
    </>
  )
}

export default App
