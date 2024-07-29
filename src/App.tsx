import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App;
