import React, { useContext, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { HamburgerContext } from '../context/UseHamburger';

const Description = () => {
    
    useEffect(() => {
        window.scroll(0,0);
    }, []);

    const { addToCart } = useContext(HamburgerContext);

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const id = queryParams.get("id");
    const img = queryParams.get("img");
    const name = queryParams.get("name");
    const prize = queryParams.get("price");
  

    const inputRef = useRef(null);
  return (
    <>
        <div className='flex md:flex-row flex-col'>
            <div>
                <div className='img m-auto p-8 mt-[4.8rem] mb-5 w-[350px] md:w-[550px] h-[350px] md:h-[500px] border-[1px] border-black'>
                    <img src={`http://localhost:3001/uploads/${img}`} className='w-full h-full'/>
                </div>
                <div>
                <p className='mx-5 md:my-10'>Descripción del producto. Describe tu producto de forma clara y precisa. Usa palabras únicas.</p> 
                </div>
            </div>
            <div >
                <div className='md:my-20 m-5 md:m-6'>
                    <div className='flex flex-col'>
                        <div className='order-2 md:order-none'>
                            <h1 className='text-xl mb-2'>{name}</h1>
                        </div>
                        <div className='order-1 md:order-none'>
                            <p className='text-sm md:mb-5'>SKU:00455</p>
                        </div>
                        <div className='order-3 md:order-none'>
                            <span>{prize}</span>
                        </div>
                        <div className='my-5 flex flex-col order-4 md:order-none'>
                            <h1 className='text-sm'>Cantidad</h1>
                            <input type='number' className='block w-20 h-8' ref={inputRef} />
                        </div>
                        <div className='flex flex-col text-[#ffffff] order-5 md:order-none'>
                            <button 
                            onClick={() => addToCart(
                                {
                                    id: id,
                                    name: name,
                                    price: prize,
                                    img: img,
                                    code: 'SKU:00455',
                                    quantity: parseInt(inputRef.current.value)
                                }
                            )} 
                            className='bg-[#ff97d9] md:w-[300px] h-11 my-2'>
                                Agregar al Carrito
                            </button>
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