import { Route, Routes } from "react-router-dom"
import { Footer, NavDesktop } from "./layouts"
import { lazy } from "react"
import { useCheckUserSession } from "./hooks/useCheckUserSession"
import { ProductPage } from "./routes"

const Home = lazy(() => import('./routes/Home'))
const Checkout = lazy(() => import('./routes/Checkout'))
const Auth = lazy(() => import('./routes/Auth'))
const Shop = lazy(() => import('./routes/Shop'))
const Profile = lazy(() => import('./routes/Profile'))

function App() {

  useCheckUserSession()

  return (
    <>
      
      <Routes>
        <Route path="/" element={<NavDesktop />}>
          <Route index element={<Home />} />
          <Route 
            path="/shop/:gender?/category?/:category?/badge?/:badge?/brand?/:brand?" 
            element={<Shop />}
          />

          <Route path="/profile" element={<Profile />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/:productId" element={<ProductPage />} />
        </Route>
      </Routes>
      
      <Footer />
    </>
  )
}

export default App
