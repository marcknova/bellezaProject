import React from 'react'
import IMG from '../assets/6.jpg'

const Carrito = () => {
  return (
    <>
        <div className='bg-[#e5b3fe] flex'>
            <div className=''>
                <div className='img m-auto border-[1px] border-zinc-500 mr-0 mt-[4.8rem] mb-5 w-[550px] h-[500px]'>
                    <img src={IMG} className='w-full h-full'/>
                </div>
                <div className=''>
                <h1 className=''>Descripción del producto. Describe tu producto de forma clara y precisa. Usa palabras únicas.</h1> 
                </div>
            </div>
            <div >
                <div className='my-20 m-6'>
                    <div>
                        <h1 className='text-xl mb-2'>Titulo del producto</h1>
                        <p className='text-sm mb-5'>SKU:00455</p>
                        <span>$120.00</span>
                        <div className='my-5 flex flex-col'>
                            <h1 className='text-sm'>Cantidad</h1>
                            <input type='number' className='block w-20 h-8' />
                        </div>
                        <div className='flex flex-col text-[#ffffff]'>
                            <button className='bg-[#ff97d9] w-[300px] h-11 my-2'>Agregar al Carrito</button>
                            <button className='bg-black w-[350px] h-11 my-2'>Realizar Compra</button>
                        </div>
                        <div>
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

export default Carrito