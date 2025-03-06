import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
<<<<<<< HEAD
import Home from './pages/Home'
import DetailsBeer from './pages/DetailsBeer'
import "./index.css"

function App() {

=======
import Home from './pages/home/Home'
import Layout from './pages/Layout/Layout';
import AllBeers from './pages/allbeers/AllBeers';
import BeerInDetail from './pages/beerInDetail/BeerInDetail';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='/allbeers' element={<AllBeers/>}/>
        <Route path='/allbeers/:id' element={<BeerInDetail/>}/>
      </Route>
    )
  );

>>>>>>> cbb6c78dc664aef6d77ca21bf4747b2a3102ea1b
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
