import { Link } from "react-router-dom";
import MenuHamburger from "../menuHamburger/MenuHamburger";
import { useContext, useEffect, useRef, useState } from "react";
import { HamburgerContext } from "../../context/UseHamburger";
import { useCookies } from 'react-cookie';
import './Navbar.css';

const Navbar = () => {
  
  const { hamburger, cartSize } = useContext(HamburgerContext);
  const [cookies, removeCookie] = useCookies(['userToken']);
  const isAuthenticated = !cookies.userToken;
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null)

  useEffect(()=> {
    if(isOpen) {
      document.addEventListener('click', handleClickOutside);

      return () => {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  },[isOpen])

  const handleClickOutside = (event) => {
    if(menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDeleteCookie = () => {
    removeCookie('userToken', { path: '/' });
    window.location.reload();
  }
// e5b3fe 
  return (
    <div className="bg-[#896491]">
        <nav className="flex justify-between md:mx-2 flex-wrap-reverse">
          <MenuHamburger />
            <div className="p-1 m-2">
              <Link to="/bellezaProject/">
                <h1 className="text-2xl font-bold text-white">Logo</h1>
              </Link>
            </div>
            <div className="text-[#ffffff]" id="menu">
            <ul className={hamburger ? "fixed left-0 bg-black z-30 text-white w-full h-full md:text-left text-center" : "list-none absolute md:static md:flex -left-full"  }>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masnuevo">Lo mas nuevo</Link>
                </div>
              </li>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masvendido">Mas vendido</Link>
                </div>
              </li>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/blog">Blog</Link>
                </div>
              </li>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/cara">Cara</Link>
                </div>
              </li>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/labios">Labios</Link>
                </div>
              </li>
              <li className=" hover:font-semibold ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/ojos">Ojos</Link>
                </div>
              </li>
              <li>
                <div className="md:p-0 p-5 text-center md:text-left md:absolute md:right-10 md:top-[1.15rem]">
                  <span className="mx-5">
                  {
                    isAuthenticated 
                      ?
                      <Link to='/bellezaProject/login'>
                        <i className="fa-solid fa-user"></i>
                        <h1 className="md:inline-block mx-2">Entrar</h1>
                      </Link> 
                      :
                      <>
                      <div onClick={handleMenuToggle} className="inline-block w-10 h-10 mt-[-0.5rem] mx-3 border-[1px] border-[#663581] rounded-full cursor-pointer" ref={menuRef}>
                        <i className="fa-solid fa-user text-lg mx-[0.70rem] mt-1"></i>
                      </div>
                        <div className={isOpen ? "absolute right-[-2rem] w-48 top-11" : "hidden"} >
                        <ul className="floatMenu bg-[#663581] text-sm text-center text-[#e5b3fe] p-2">
                          <li>
                            <Link to="/bellezaProject/AddProducts">
                                Agregar Productos
                            </Link>
                          </li>
                          <li onClick={handleDeleteCookie}>Log out</li>
                        </ul>
                      </div>
                      </>
                  }
                  </span>
                </div>
              </li>
            </ul>
            </div>
            <div className="md:p-2 md:m-2 md:basis-0 basis-full md:bg-[#896491] bg-black md:text-center text-right p-2 text-xl">
                <Link to='/bellezaProject/view/carrito'>
                  <i className="fa-solid fa-cart-shopping text-white">
                    {
                      cartSize !== 0 ? <span className="text-sm absolute right-3 top-6">{cartSize}</span> : null
                    }  
                  </i>
                  {/* <i class="fa-thin fa-cart-shopping"></i> */}
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar