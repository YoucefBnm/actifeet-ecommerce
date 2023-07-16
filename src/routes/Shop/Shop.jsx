import { Route, Routes } from "react-router-dom"
import ShopCollection from "../ShopCollection/ShopCollection"

const Shop = () => {
  return (
    <Routes>
      <Route index path="/shop/all_products" element={<ShopCollection />} />
      <Route path=":collection" element={<ShopCollection />} />
    </Routes>
  )
}

export default Shop