import ShopContainer from "../../components/ShopContainer/ShopContainer"
import ShopNav from "../../components/ShopNav/ShopNav"
import ShopSearch from "../../components/ShopSearch/ShopSearch"
import ShopSort from "../../components/ShopSort/ShopSort"

const Shop = () => {

  return (
    <main className="shop pad--x-default pad--y-default">
      <ShopNav />

      <div className="shop__container d--flex d--flex-col gap--2">
        <div className="shop__utils-wrap d--flex d--align-end">
          <ShopSearch />
          <ShopSort />
        </div>

      </div>
    </main>
  )
}

export default Shop