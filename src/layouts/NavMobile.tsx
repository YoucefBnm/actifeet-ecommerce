import { LogoDark } from "@/assets"
import { NavbarUtils, Spinner } from "@/components"
import { navbarLinks } from "@/constants/navbarLinks"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/libs/shadcn/ui/drawer"
import { Sheet, SheetContent, SheetTrigger, X } from "@/libs/shadcn/ui/sheet"
import { Suspense } from "react"
import { Link, Outlet } from "react-router-dom"

const NavTrigger = () => {

  return (
    <DrawerTrigger className="w-28 flex justify-end">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 6H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1 12H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M1 18H24" stroke="black" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
      <span className="sr-only">toggle navigation</span>
    </DrawerTrigger>
  )
}

const NavMobile = () => {
  return (
    <>
      <header className=" sticky w-screen left-0 top-0 z-50 bg-white flex px-default items-center justify-between py-2">
        <nav className="flex flex-1 justify-between items-center">
          <Link to={'/'}>
            <img width={113} height={17} className="align-middle" alt="actifeet logo" src={LogoDark} />
          </Link>

          <NavbarUtils />

          <Drawer direction="right">
            <NavTrigger />
            
            <DrawerContent
              className="flex flex-col items-start gap-5 p-5">
                <DrawerClose className=" absolute right-4 top-4 rounded-md opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-zinc-100 dark:ring-offset-zinc-950 dark:focus:ring-zinc-300 dark:data-[state=open]:bg-zinc-800">
                  <X className="size-4" />
                  <span className="sr-only">Close</span>
                </DrawerClose>

                {
                  navbarLinks.map(navItem => (
                    navItem.submenu 
                    ? (
                      <Sheet key={navItem.id}>
                        <SheetTrigger className="capitalize font-semibold transition-opacity hover:opacity-70">{navItem.title}</SheetTrigger>
                        <SheetContent className="flex items-start justify-evenly flex-wrap">
                          {
                            navItem.submenu.map((submenuItem, index) => (
                              <div key={`${submenuItem.mainTitle}-${index}`} className="flex flex-col gap-3">
                                <h4 className="text-neutral-600 capitalize font-semibold">{submenuItem.mainTitle}</h4>
                                <ul className="flex flex-col gap-1 5">
                                  {
                                    submenuItem.links.map((submenuLink,index) => 
                                      <Link key={`${submenuLink.title}-${index}`} to={submenuLink.route} className="capitalize font-semibold transition-opacity hover:opacity-70">{submenuLink.title}</Link>
                                    )
                                  }
                                </ul>
                              </div>
                            ))
                          }
                        </SheetContent>
                      </Sheet>
                    )
                    : (
                      <Link to={navItem.route}  key={navItem.id} className="capitalize font-semibold transition-opacity hover:opacity-70">{navItem.title}</Link>
                    )
                  ))
                }
              </DrawerContent>
          </Drawer>

        </nav>
        
      </header>
      <Suspense fallback={<div className="w-screen h-svh flex items-center justify-center bg-neutral-50"><div className="w-12 h-12"><Spinner /></div></div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default NavMobile