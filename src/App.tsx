
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
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

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
