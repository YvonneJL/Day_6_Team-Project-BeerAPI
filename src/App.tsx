import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import DetailsBeer from './pages/DetailsBeer'
import "./index.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/beers/:id' element={<DetailsBeer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
