import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Categorias from './pages/Cliente'
import CategoriasProd from './pages/Produtos'
import PDV from './components/PDV'
import PdvTela from './pages/PDV'


const Rotas = () => (
  <Routes>
   <>
   <Route path="/" element={<Home />} />
   <Route path="/categorias" element={<Categorias />} />
   <Route path="/Produtos" element={<CategoriasProd />} />
   <Route path="/PDV" element={<PdvTela />} />
   </>
  </Routes>
)
export default Rotas
