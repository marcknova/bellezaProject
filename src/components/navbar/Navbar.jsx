import { Link, useLocation } from "react-router-dom";
import MenuHamburger from "../menuHamburger/MenuHamburger";
import { useContext, useRef, useState, useEffect } from "react";
import { HamburgerContext } from "../../context/UseHamburger";
import { useCookies } from "react-cookie";
import "./Navbar.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { hamburger, cartSize } = useContext(HamburgerContext);
  const [cookies, removeCookie] = useCookies(["userToken"]);
  const isAuthenticated = !cookies.userToken;

  const menuRef = useRef(null);
  const open = Boolean(anchorEl);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteCookie = () => {
    removeCookie("userToken", { path: "/" });
  };

  // e5b3fe
  return (
    <div
      className={`text-[#ffffff] ${
        isMobileMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
      }`}
      id="menu"
    >
      <div className="bg-[#896491]">
        <nav className="flex justify-between lg:mx-2 flex-wrap-reverse">
          <MenuHamburger />
          <div className="p-1 m-2">
            <Link to="/bellezaProject/">
              <h1 className="text-2xl font-bold text-white">Logo</h1>
            </Link>
          </div>
          <div className="text-[#ffffff]" id="menu">
            <ul
              className={
                hamburger
                  ? "fixed left-0 bg-black z-30 text-white w-full h-full lg:text-left text-center"
                  : "list-none absolute lg:static md:flex -left-full"
              }
            >
              <li className=" ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masnuevo">Lo mas nuevo</Link>
                </div>
              </li>
              <li className="ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/masvendido">Mas vendido</Link>
                </div>
              </li>
              <li className="ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/cara">Cara</Link>
                </div>
              </li>
              <li className="ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/labios">Labios</Link>
                </div>
              </li>
              <li className="ease-in duration-100 cursor-pointer">
                <div className="p-4">
                  <Link to="/bellezaProject/ojos">Ojos</Link>
                </div>
              </li>
            </ul>
          </div>
          <div className="lg:p-1 lg:m-1 flex lg:basis-0 basis-full lg:bg-[#896491] bg-black lg:text-center text-right p-2 text-xl">
            <div>
              <div className="md:p-0 p-5 text-center md:text-left md:ml-auto">
                <div className="mx-5">
                  {isAuthenticated ? (
                    <Link to="/bellezaProject/login">
                      <div className="lg:block hidden">
                        <div className="flex mt-3 text-base">
                          <i className="fa-solid fa-user"></i>
                          <h1 className="md:inline-block mx-2">Entrar</h1>
                        </div>
                      </div>
                    </Link>
                  ) : (
                    <>
                      <div
                        onClick={handleClick}
                        className=" w-10 h-10 border-[1px] border-[#663581] rounded-full cursor-pointer"
                        ref={menuRef}
                      >
                        <i className="fa-solid fa-user text-lg mx-[0.70rem] mt-1"></i>
                      </div>
                      <div>
                        <Menu
                          className="mt-1"
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                        >
                          <Link to="/bellezaProject/AdminProducts">
                            <MenuItem onClick={handleClose}>
                              Admin Product
                            </MenuItem>
                          </Link>

                          <Link to="/bellezaProject/AddProducts">
                            <MenuItem onClick={handleClose}>
                              Add Products
                            </MenuItem>
                          </Link>
                          <div onClick={handleDeleteCookie}>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </div>
                        </Menu>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div>
              <Link to="/bellezaProject/view/carrito">
                <IconButton aria-label="delete">
                  <ShoppingCartIcon className="text-white" />
                  {cartSize !== 0 ? (
                    <span className="text-sm absolute right-3 top-6">
                      {cartSize}
                    </span>
                  ) : null}
                </IconButton>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
