
const Navbar = () => {
  return (
    <div className="bg-[#ff97d9]">
        <nav className="flex justify-between mx-2">
            <div className="p-1 m-2">
                <h1 className="text-2xl font-bold">Logo</h1>
            </div>
            <ul className="list-none flex space-x-7 p-2 mt-2">
                    <li>Lo mas nuevo</li>
                    <li>Mas vendido</li>
                    <li>Blog</li>
                    <li>Cara</li>
                    <li>Labios</li>
                    <li>Ojos</li>
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