
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import EjemploDr from './pages/EjemploDr.jsx'
import EjemploJdr from './pages/EjemploJdr.jsx'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>Inicio</h1>
      <div className="botones">
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/ejemplojdr')}
        >
          Ejemplo JDR
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/ejemplodr')}
        >
          Ejemplo DR
        </button>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="contenedor">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejemplojdr" element={<EjemploJdr />} />
        <Route path="/ejemplodr" element={<EjemploDr />} />
      </Routes>
    </div>
  )
}

export default App