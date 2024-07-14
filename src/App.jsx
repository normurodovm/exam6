import { Header } from './layout/header.jsx/header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/main-layout'
import { Home } from './layout/home/home'
import { About } from './layout/about/about'
import { Shop } from './layout/shop/shop'
import { ShopSingle } from './layout/shop-single/shop-single'

function App() {

  return (
    <>
          <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='shop' element={<Shop/>}/>
          <Route path='shop-single' element={<ShopSingle/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
