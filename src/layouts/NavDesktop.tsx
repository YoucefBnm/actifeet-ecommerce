import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/libs/shadcn/ui/navigation-menu"
import { NavbarLinkItem, SubmenuItem, SubmenuLinkItem } from "./types"
import { Link, Outlet } from "react-router-dom"
import { LogoDark } from "@/assets"
import { navbarLinks } from "@/constants/navbarLinks"
import { NavbarUtils, Spinner } from "@/components"
import { Suspense } from "react"

const NavbarSubmenu = (props:NavbarLinkItem) => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="capitalize text-base font-semibold from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">{props.title}</NavigationMenuTrigger>

          <NavigationMenuContent className="w-screen">
            <ul className="pr-default flex justify-between w-screen">
              <div className="h-full block">
                <img src={props.ctaImage} alt={props.title} className=" align-middle object-contain" />
              </div>

              <div className="flex justify-evenly flex-1 py-4">
                {
                  props.submenu && props.submenu.map((navSubmenuItem:SubmenuItem) => (
                    <li key={navSubmenuItem.mainTitle} className="flex flex-col gap-3">
                      <h4 className="font-semibold capitalize text-neutral-500">{navSubmenuItem.mainTitle}</h4>
                      <ul className="flex flex-col gap-2">
                        {navSubmenuItem.links.map((submenuLink:SubmenuLinkItem) => (
                          <Link 
                            key={submenuLink.title}
                            className="text-sm capitalize font-semibold"
                            to={submenuLink.route}
                          >
                            {submenuLink.title}
                          </Link>
                        ))}
                      </ul>
                    </li>
                  ))
                }
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavDesktop = () => {
  return (
    <>
      <header className="sticky w-screen left-0 top-0 z-50 bg-white flex px-default items-center justify-between py-2">
        <Link to='/'>
          <img src={LogoDark} className=" align-middle" alt="actifeet logo" />
        </Link>

        <nav className="flex items-center justify-center">
          {
            navbarLinks.map((navLink:NavbarLinkItem) => (
              navLink.submenu
              ? (
                <NavbarSubmenu
                  id={navLink.id}
                  key={navLink.id}
                  title={navLink.title}
                  submenu={navLink.submenu}
                  ctaImage={navLink.ctaImage}
                />
              )
              : navLink.route && <Link key={navLink.id} to={navLink.route} className={`${navLink.title==='sale' ? 'text-red-500' : 'text-inherit'} capitalize font-semibold p-2 px-4 transition-opacity hover:opacity-70`}>{navLink.title}</Link>
            ))
          }
        </nav>

        <NavbarUtils />
      </header>

      <Suspense fallback={<div className="w-screen h-svh flex items-center justify-center bg-neutral-50"><div className="w-12 h-12"><Spinner /></div></div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default NavDesktop