import React, { useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "./../context/UseCart";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuantityInput from "./../components/inputs/inputNumber/InputNumber";

const Description = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { cartState, cartDispatch } = useContext(CartContext);
  const quantityInputRef = useRef();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const quantity = quantityInputRef;

  const products = {
    id: queryParams.get("id"),
    img: queryParams.get("img"),
    name: queryParams.get("name"),
    prize: queryParams.get("price"),
    // quantity: parseInt(quantity),
  };

  const notify = () =>
    toast.success("Porducto Agregado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  console.log("Carrito antes", cartState);

  const addToCart = () => {
    console.log("Carrito ahora", cartState);
    cartDispatch({ type: "ADD_TO_CART", payload: products });
  };

  return (
    <>
      <div className="flex md:flex-row flex-col p-10">
        <div>
          <div className="img ml-auto p-8 mt-[4.8rem] mb-5 w-[350px] md:w-[550px] h-[350px] md:h-[500px] border-[1px] border-black">
            <img
              src={`http://localhost:3001/uploads/${products.img}`}
              className="w-full h-full"
            />
          </div>
          <div>
            <p className="mx-5 md:my-10">
              Descripción del producto. Describe tu producto de forma clara y
              precisa. Usa palabras únicas.
            </p>
          </div>
        </div>
        <div>
          <div className="md:my-20 m-5 md:m-6">
            <div className="flex flex-col">
              <div className="order-2 md:order-none">
                <h1 className="text-xl mb-2">{products.name}</h1>
              </div>
              <div className="order-1 md:order-none">
                <p className="text-sm md:mb-5">SKU:00455</p>
              </div>
              <div className="order-3 md:order-none">
                <span>${products.prize}</span>
              </div>
              <div className="my-5 flex flex-col order-4 md:order-none">
                <h1 className="text-sm">Cantidad</h1>
                <QuantityInput />
              </div>
              <div className="flex flex-col text-[#ffffff] order-5 md:order-none">
                <button
                  onClick={addToCart}
                  className="bg-[#ff97d9] md:w-[300px] h-11 my-2"
                >
                  Agregar al Carrito
                </button>
                <button className="bg-black md:w-[350px] h-11 my-2">
                  Realizar Compra
                </button>
              </div>
              <div className="order-6 md:order-none">
                <div className="w-96 my-3">
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Informacion del Producto</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Politicas de devolucion</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography>Informacion del envio</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
                <div>
                  <button onClick={notify}>Notify!</button>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
