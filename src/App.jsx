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
import Description from './pages/Description'
import { Footer } from './components/footer/Footer'
import Carrito from './pages/Carrito'

// colors
// ff97d9
// e5b3fe

function App() {
  return (
    <>
  <Navbar />
        <Routes>
            <Route path='/bellezaProject/' element={ <Inicio /> } />
            <Route path="/bellezaProject/masnuevo" element={ <MasNuevo /> } />
            <Route path="/bellezaProject/masvendido" element={ <MasVendido /> } />
            <Route path='/bellezaProject/blog' element={ <Blog /> } />
            <Route path='/bellezaProject/cara' element={ <Cara /> } />
            <Route path='/bellezaProject/labios' element={ <Labios /> } />
            <Route path='/bellezaProject/ojos' element={ <Ojos /> } />
            <Route path='/bellezaProject/view/description' element={ <Description /> } />
            <Route path='/bellezaProject/view/carrito' element={ <Carrito /> } />
          </Routes>
  <Footer />
    </>
  )
}

export default App
