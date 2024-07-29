import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Categorias'


const Rotas = () => (
  <Routes>
   <>
   <Route path="/" element={<Home />} />
   <Route path="/categorias" element={<Categorias />} />
   </>
  </Routes>
)
export default Rotas
