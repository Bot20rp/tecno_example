
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import EjemploDr from './pages/EjemploDr.jsx'
import EjemploJdr from './pages/EjemploJdr.jsx'
import Example_2 from './pages/Example2.jsx'

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
        <button
          type="button"
          className="btn"
          onClick={() => navigate('/example2')}
        >
          Example 2
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
        <Route path="/example2" element={<Example_2 />} />
      </Routes>
    </div>
  )
}

export default App