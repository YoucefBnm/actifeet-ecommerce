import { Navbar, Footer, NavMobile } from './components'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Shop } from './routes'
import './sass/App.scss'

function App() {

  return (
    <>
      {/* <Navbar /> */}
      <NavMobile />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
