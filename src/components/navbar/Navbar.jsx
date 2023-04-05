import { Link } from "react-router-dom"
import MenuHamburger from "../menuHamburger/MenuHamburger"
import { useContext } from "react"
import { HamburgerContext } from "../../context/UseHamburger"

const Navbar = () => {
  const { hamburger } = useContext(HamburgerContext)
  return (
    <div className="bg-[#ff97d9]">
        <nav className="flex justify-between md:mx-2 flex-wrap-reverse">
          <MenuHamburger />
            <div className="p-1 m-2">
              <Link to="/bellezaProject/">
                <h1 className="text-2xl font-bold">Logo</h1>
              </Link>
            </div>
            <div>
            <ul className={hamburger ? "absolute left-0 bg-black z-30 text-white w-full h-full md:text-left text-center" : "list-none absolute md:static md:flex -left-full"  }>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masnuevo">Lo mas nuevo</Link>
                </div>
              </li>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masvendido">Mas vendido</Link>
                </div>
              </li>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/blog">Blog</Link>
                </div>
              </li>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/cara">Cara</Link>
                </div>
              </li>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/labios">Labios</Link>
                </div>
              </li>
              <li className="hover:bg-[#e0acfc] hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/ojos">Ojos</Link>
                </div>
              </li>
              <li>
                <div className="md:p-0 p-5 text-center md:text-left">
                  <span className="mx-5"><i className="fa-solid fa-user"></i>
                    <h1 className="md:hidden inline-block mx-3">Entrar</h1>
                  </span>
                </div>
              </li>
            </ul>
            </div>
            <div className="md:p-2 md:m-2 md:basis-0 basis-full md:bg-[#ff97d9] bg-black">
            <span><i className="fa-solid fa-cart-shopping text-white md:text-black"></i></span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar