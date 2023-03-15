import IMG2 from '../assets/img1.jpg';
import IMG1 from '../assets/product1.jpg';
import IMG3 from '../assets/product2.jpg';

const Inicio = () => {
  return (
    <>
    <div className='bg-[#ff97d9]'>
        <div className='w-full h-[400px] flex justify-end bg-[#e5b3fe]'>
          <div>
            <div className='absolute top-24 left-0 p-10 ml-[17%]'>
              <span>NUEVO LANZAMIENTO</span>
              <h1 className='font-bold text-4xl my-5'>Polvos mas brillosos</h1>
              <p className='w-96'>Conoce nuestras nuevas sombras de ojos con un acabado brillante, textura suave y ligera y fijación de 10 horas</p>
              <div className='mt-5'>
                <button>Comprar</button>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={IMG2} className='h-full' />
          </div>
        </div>
        <div>
          <h1 className='text-center font-bold text-2xl py-5 my-5'>Nuestros Mejores Productos</h1>
          <div className='w-full h-full'>
            <div><img src={IMG1} className='w-24 h-24' /></div>
            <div><img src={IMG3} className='w-24 h-24' /></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Inicio