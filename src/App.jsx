import { Navbar, Footer, NavMobile } from './sections'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register, ShopCollection } from './routes'
import './sass/App.scss'
import { useRef } from 'react'

function App() {
  const currentWindowWidth = useRef(window.innerWidth)

  return (
    <>
      {
        currentWindowWidth.current > 880
        ? <Navbar />
        : <NavMobile />
      }
      <Routes>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
        <Route path='/shop/:collection/:subCollection?' element={<ShopCollection />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
