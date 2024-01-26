import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "./../context/UseCart";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Snackbar from "@mui/material/Snackbar";
import QuantityInput from "./../components/inputs/inputNumber/InputNumber";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Description = () => {
  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState("");
  const [message, setMessage] = React.useState("");
  const { cartDispatch, total } = useContext(CartContext);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const validate = total !== 0 ? false : true;

  const products = {
    id: queryParams.get("id"),
    img: queryParams.get("img"),
    name: queryParams.get("name"),
    prize: queryParams.get("price"),
    quantity: total,
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addToCart = () => {
    if (!validate) {
      cartDispatch({ type: "ADD_TO_CART", payload: products });
      setType("success");
      setMessage("Producto Agregado");
      handleClick();
    } else {
      setType("error");
      setMessage("Selecciona Una Cantidad");
      handleClick();
    }
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col p-10 lg:h-[50rem]">
        <div className="flex flex-col lg:w-1/2 lg:mr-5 lg:mx-0 md:mx-auto">
          <div>
            <div className="img ml-auto p-8 mt-[4.8rem] mb-5 w-[300px] md:w-[540px] h-[330px] md:h-[500px] border-[1px]">
              <img
                src={`http://localhost:3001/uploads/${products.img}`}
                className="w-full h-full"
              />
            </div>
          </div>
          <div>
            <div>
              <p className="md:w-[540px] md:ml-auto md:text-base text-sm md:my-0 my-5">
                Descripción del producto. Lugar ideal para "vender" tu producto
                y captar la atención del comprador. Describe tu producto de
                forma clara y precisa. Usa palabras únicas. Escribe tu propia
                descripción en vez de usar la del fabricante.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
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
                  className="bg-[#896491] md:w-[300px] h-11 my-2"
                >
                  Agregar al Carrito
                </button>
                <button className="bg-black md:w-[350px] h-11 my-2">
                  Realizar Compra
                </button>
              </div>
              <div className="order-6 md:order-none">
                <div className="md:w-96 my-3">
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
                  <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity={type}
                      sx={{ width: "100%" }}
                    >
                      {message}
                    </Alert>
                  </Snackbar>
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
