import { IconCart } from "../../assets"

const NavbarCartIcon = () => {
  return (
    <button className="cart-btn cursor--pointer pos--relative">
      <IconCart />
      <div className="notification">
        <span>12</span>
      </div>
    </button>
  )
}

export default NavbarCartIcon