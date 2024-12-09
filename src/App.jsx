
import { BrowserRouter} from 'react-router-dom'
import './App.css'
import Hero from './Components/Hero'

function App() {


  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
    </BrowserRouter>
  )
}

export default App
