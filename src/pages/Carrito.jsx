import React, { useContext } from "react";
import { CartContext } from "./../context/UseCart";

const Carrito = () => {
  const { cartState, cartTotal, cartDispatch } = useContext(CartContext);

  const calculateProductTotal = (item) => {
    return item.quantity * item.prize;
  };

  console.log("Carrito sensual", cartState);

  const removeItem = (itemId) => {
    cartDispatch({ type: "REMOVE_FROM_CART", payload: itemId });
    console.log("Carrito con el item eliminado", cartState);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:mx-[1rem] lg:mx-[12rem] md:p-4 p-6 mt-5 md:my-14">
        <div className="md:w-[60%] mr-8">
          <div className="my-8 border-b-[1px] border-b-[#b8afaf]">
            <h1 className="my-3 md:mx-0">Mi Carrito</h1>
          </div>
          {cartState.items.length != 0 ? (
            cartState.items.map((data) => (
              <div key={data.id}>
                <div className="flex pb-8 border-b-[1px] mb-6 border-b-[#b8afaf]">
                  <div className="w-[110px] h-[85px] border-[1px] border-black">
                    <img
                      src={`http://localhost:3001/uploads/${data.img}`}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex md:flex-row flex-col md:ml-0 ml-5">
                    <div className="md:mx-5 text-sm">
                      <h1 className="md:mb-4 mb-2">{data.name}</h1>
                      <span>${data.prize}</span>
                    </div>
                    <div className="md:mt-0 mt-5">
                      <input
                        type="number"
                        defaultValue={data.quantity}
                        className="border-[1px] border-black w-20 md:ml-[2rem]"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:w-40 justify-between md:justify-evenly ">
                    <label className="md:ml-0 ml-3 order-1">
                      ${calculateProductTotal(data)}
                    </label>
                    <span
                      className="cursor-pointer ml-3 order-2"
                      onClick={() => removeItem(data.id)}
                    >
                      <i className="fa-regular fa-circle-xmark text-xl"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="font-bold mb-10">Tu carrito esta vacio</h1>
          )}
          <div className="my-8 ml-3 md:ml-0">
            <h1 className="mb-5">
              <i className="mr-2 fa-solid fa-tag"></i>
              Ingresar codigo promocional
            </h1>
            <h1>
              <i className="mr-2 fa-regular fa-note-sticky"></i>
              Agregar Nota
            </h1>
          </div>
        </div>
        <div className="lg:w-[30%] w-full p-3">
          <div className="my-8 md:my-5 border-b-[1px] border-b-[#b8afaf]">
            <h1 className="my-3">Resumen del pedido</h1>
          </div>
          <div>
            <div>
              <span className="text-base mr-10">Subtotal</span>
              <span>${cartTotal}</span>
            </div>
            <div className="border-b-[1px] border-b-[#706a6a]">
              <h1 className="my-2">Calcular Envio</h1>
            </div>
            <div>
              <h1 className="my-5">Total</h1>
            </div>
          </div>
          <div>
            <button className="bg-black w-full h-12 mt-5 text-white">
              Finalizar Compra
            </button>
            <h1 className="my-2 text-center">
              <i className="mr-2 fa-solid fa-lock"></i>
              Pago seguro
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
