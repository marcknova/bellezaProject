import React from 'react'
import IMG from '../assets/8.jpg'

const Carrito = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row md:mx-[12rem] mt-5 md:my-14'>
            <div className='md:w-[650px] mr-8'>
                <div className='my-8 border-b-[1px] border-b-[#706a6a]'>
                    <h1 className='my-3 md:mx-0 mx-3'>Mi Carrito</h1>
                </div>
                <div className='flex pb-8 p-3 border-b-[1px] border-b-[#706a6a]'>
                    <div className='w-[150px] h-[130px] border-[1px] border-black'>
                        <img src={IMG} className='w-full h-full' />
                    </div>
                    <div className='md:ml-0 ml-5'>
                        <div className='md:mx-7'>
                            <h1 className='mb-4'>Base en polvo Moroccan</h1>
                            <span>$120.00</span>
                        </div>
                        <div className='mt-10'>
                            <input type='number' className='border-[2px] border-black w-20 md:mx-[2.2rem]' />
                            <label className='md:ml-0 ml-2'>$120.00</label>
                        </div>
                    </div>
                    <div>
                        <p className='ml-3'>X</p>
                    </div>
                </div>
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
                       <span>$120.00</span>
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