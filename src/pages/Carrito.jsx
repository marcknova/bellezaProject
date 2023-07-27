import React, { useContext } from 'react'
import IMG from '../assets/8.jpg'
import { HamburgerContext } from '../context/UseHamburger'

const Carrito = () => {

    const { cartItems, cartTotal, removeFromCart } = useContext(HamburgerContext);
    const calculateProductTotal = (item) => {
        return item.quantity * item.price;
    }

    console.log(cartItems);

  return (
    <div>
        <div className='flex flex-col md:flex-row md:mx-[12rem] md:p-4 p-6 mt-5 md:my-14'>
            <div className='md:w-[650px] mr-8'>
                <div className='my-8 border-b-[1px] border-b-[#b8afaf]'>
                    <h1 className='my-3 md:mx-0'>Mi Carrito</h1>
                </div>
                {cartItems.length != 0 ? cartItems.map((data) => (
                    <div key={data.id}>
                        <div className='grid grid-cols-3 pb-8 border-b-[1px] mb-6 border-b-[#b8afaf]'>
                            <div className='w-[110px] h-[85px] border-[1px] border-black'>
                                <img src={`http://localhost:3001/uploads/${data.img}`} className='w-full h-full' />
                            </div>
                            <div className='flex md:flex-row flex-col md:ml-0 ml-5'>
                                <div className='md:mx-5 text-sm'>
                                    <h1 className='md:mb-4 mb-2'>{data.name}</h1>
                                    <span>${data.price}</span>
                                </div>
                                <div className='md:mt-0 mt-5'>
                                    <input type='number' defaultValue={data.quantity} className='border-[1px] border-black w-20 md:ml-[2rem]' />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row md:w-40 justify-between md:justify-evenly '>
                                <label className='md:ml-0 ml-3 order-1'>${calculateProductTotal(data)}</label>
                                <span onChange={removeFromCart} className='cursor-pointer ml-3 order-2'>X</span>
                            </div>
                        </div>
                    </div>
                )) : <h1 className='font-bold mb-10'>Tu carrito esta vacio</h1>}  
                <div className='my-8 ml-3 md:ml-0'>
                    <h1 className='mb-5'>Ingresar codigo promocional</h1>
                    <h1>Agregar Nota</h1>
                </div>
            </div>
            <div className='md:w-[250px] p-3'>
                <div className='my-8 border-b-[1px] border-b-[#706a6a]'>
                    <h1 className='my-3'>Resumen del pedido</h1>
                </div>
                <div className=''>
                    <div>
                       <span className='text-base mr-10'>Subtotal</span>
                       <span>${cartTotal}</span>
                    </div>
                    <div className='border-b-[1px] border-b-[#706a6a]'>
                        <h1 className='my-2'>Calcular Envio</h1>
                    </div>
                    <div>
                        <h1 className='my-5'>Total</h1>
                    </div>
                </div>
                <div>
                    <button className='bg-black w-full h-12 text-white'>Finalizar Compra</button>
                    <h1 className='my-2 text-center'>Pago seguro</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carrito