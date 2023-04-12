import React from 'react'
import IMG from '../assets/6.jpg'

const Description = () => {
  return (
    <>
        <div className='bg-[#e5b3fe] flex md:flex-row flex-col'>
            <div>
                <div className='img m-auto border-[1px] border-zinc-500 mr-0 mt-[4.8rem] mb-5 w-full md:w-[550px] h-[350px] md:h-[500px]'>
                    <img src={IMG} className='w-full h-full'/>
                </div>
                <div>
                <p className='md:my-10'>Descripción del producto. Describe tu producto de forma clara y precisa. Usa palabras únicas.</p> 
                </div>
            </div>
            <div >
                <div className='md:my-20 m-5 md:m-6'>
                    <div className='flex flex-col'>
                        <div className='order-2 md:order-none'>
                            <h1 className='text-xl mb-2'>Titulo del producto</h1>
                        </div>
                        <div className='order-1 md:order-none'>
                            <p className='text-sm md:mb-5'>SKU:00455</p>
                        </div>
                        <div className='order-3 md:order-none'>
                            <span>$120.00</span>
                        </div>
                        <div className='my-5 flex flex-col order-4 md:order-none'>
                            <h1 className='text-sm'>Cantidad</h1>
                            <input type='number' className='block w-20 h-8' />
                        </div>
                        <div className='flex flex-col text-[#ffffff] order-5 md:order-none'>
                            <button className='bg-[#ff97d9] md:w-[300px] h-11 my-2'>Agregar al Carrito</button>
                            <button className='bg-black md:w-[350px] h-11 my-2'>Realizar Compra</button>
                        </div>
                        <div className='order-6 md:order-none'>
                            <div>Informacion del producto</div>
                            <div>Politicas de devolucion</div>
                            <div>Informacion de envio</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Description