import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-[#ff97d9]">
        <nav className="flex justify-between mx-2">
            <div className="p-1 m-2">
              <Link to="/">
                <h1 className="text-2xl font-bold">Logo</h1>
              </Link>
            </div>
            <ul className="list-none flex space-x-7 p-2 mt-2">
                    <Link to="/masnuevo">Lo mas nuevo</Link>
                    <Link to="/masvendido">Mas vendido</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/cara">Cara</Link>
                    <Link to="/labios">Labios</Link>
                    <Link to="/ojos">Ojos</Link>
            </ul>
            <div className="p-2 m-2">
                <span className="mx-5"><i className="fa-solid fa-user"></i></span>
                <span><i className="fa-solid fa-cart-shopping"></i></span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar