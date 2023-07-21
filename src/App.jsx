import { Navbar, Footer, UserFormInputGroup } from './components'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, Register, Shop } from './routes'
import './sass/App.scss'

function App() {

  return (
    <>
      <Navbar />

      <Register />

      <Login />

      
      <Routes>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
