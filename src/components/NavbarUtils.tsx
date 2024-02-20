import { IconSearch } from "@/assets"
import { Link } from "react-router-dom"
import { AuthDropdown } from "."
import { Cart } from "@/layouts"

const NavbarUtils = () => {
  return (
    <ul className="flex items-center">
      <li className="py-2 px-2">
        <Link aria-label="search page link" to='/search'>
          <img width={23} height={23} className=" align-middle" src={IconSearch} aria-hidden='true' />
        </Link>
      </li>

      <li className="py-2 px-2">
        <AuthDropdown />
      </li>

      <li className="py- px-2">
        <Cart />
      </li>
    </ul>
  )
}

export default NavbarUtils