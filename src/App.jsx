import { Navbar, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Shop } from './routes'
import './sass/App.scss'
import { useRef } from 'react'

function App() {
  const currentWindowWidth = useRef(window.innerWidth)

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/auth/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
