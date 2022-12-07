
import './index.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from '../components/navbar'
function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar></Navbar>
       <div className="pages">
        <Routes>
            <Route path="/" element={<Home />}/>
        </Routes>
       </div>
      </BrowserRouter>
      
    </div>
  )
}

export default App
