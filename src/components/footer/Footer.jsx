import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-black text-white p-10">
          <div className="md:mx-28 p-10 flex flex-col md:flex-row">
            <div className="md:w-[20%]">
              <div className="md:mx-5 md:mb-0 mb-5">
                <h1 className="mb-3">Comprar</h1>
                <ul>
                  <li>Productos Nuevos</li>
                  <li>Mas Vendidos</li>
                  <li>Labios</li>
                  <li>Ojos</li>
                </ul>
              </div>
            </div>
            <div className="md:w-[20%] md:mb-0 mb-2">
              <h1 className="mb-3">Tienda</h1>
              <p>Ote 5 #964 Orizaba, Ver</p>
            </div>
            <div className="md:w-[25%]">
              <h1 className="mb-3">Atencion Al Cliente</h1>
              <h1 className="mb-1 font-bold">
                Phone: <span className="font-normal">2722085138</span>
              </h1>
              <h1 className="mb-1 font-bold">
                Email:{" "}
                <span className="font-normal">marck.noval@gmail.com</span>
              </h1>
            </div>
            <div>
              <div className="image-container">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqeOKZ6tkz6lQYMdVpOJTgxSkYvljuWar1hA&usqp=CAU"
                  alt="Image"
                />
              </div>
            </div>
            <div className="md:w-[35%]">
              <h1 className="font-extrabold text-end mt-[30%]">
                Todos los derechos reservados
              </h1>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
