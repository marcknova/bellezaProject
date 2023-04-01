import React from 'react'
import { Footer } from '../components/footer/Footer'
import img from '../assets/product3-removebg-preview.png'

const LomasNuevo = () => {
  return (
    <>
      <div className='bg-moresale h-[240px]'>
          {/* <img src={IMG1} className='w-full h-full' /> */}
          <div className='p-5'>
            <h1 className='text-4xl text-center m-20'>Lo mas vendido</h1>
          </div>
      </div>
      <div className='bg-[#e5b3fe]'>
        <div className='flex flex-row flex-wrap justify-center'>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
          <div className='basis-[25%] mx-5'>
            <img src={img} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LomasNuevo