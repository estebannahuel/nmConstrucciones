import { NavBar } from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Trabajos } from './routes/Trabajos'
import { Inicio } from './routes/Inicio'
import { Contactos } from './routes/Contactos'
import { Trabajos1 } from './components/trabajos1'
import { Footer } from './components/Footer'
import './App.css'
import { WhatsAppButton } from './components/WhatsAppButton'



function App() {
  return (
    <>


      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Inicio></Inicio>}></Route>
        <Route path='/trabajos' element={<Trabajos></Trabajos>}></Route>
        <Route path='/contactos' element={<Contactos></Contactos>}></Route>
        <Route path='/trabajos1/:id' element={<Trabajos1></Trabajos1>}></Route>
      </Routes>

      <Footer></Footer>
     
      <WhatsAppButton></WhatsAppButton>



    </>
  )
}

export default App
