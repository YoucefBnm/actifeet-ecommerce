import { Navbar, Footer } from './components'
import { Routes, Route } from 'react-router-dom'
import { Home, Shop } from './routes'
import './sass/App.scss'

function App() {

  return (
    <>
      <Navbar />
  
      <Routes>
        <Route index element={<Home />} />
        <Route path='/shop/*' element={<Shop />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
