
import './App.css'
import { Header } from './componentes/Header/Header'
import { PieDePagina } from './componentes/PieDePagina/PieDePagina'
import { SeccionCinco } from './componentes/SeccionCinco/SeccionCinco'
import { SeccionCuatro } from './componentes/SeccionCuatro/SeccionCuatro'
import { SeccionDos } from './componentes/SeccionDos/SeccionDos'
import { SeccionSeis } from './componentes/SeccionSeis/SeccionSeis'
import { SeccionTres } from './componentes/SeccionTres/SeccionTres'
import SeccionUno from './componentes/SeccionUno/SeccionUno'

function App() {


  return (
    <>
      <Header />
      <SeccionUno />
      <SeccionDos />
      <SeccionTres />
      <SeccionCuatro />
      <SeccionCinco />
      <SeccionSeis />
      <PieDePagina />
      

    </>
  )
}

export default App
