import IMG0 from '../assets/img1.jpg';
import IMG1 from '../assets/1.jpg';
import IMG2 from '../assets/2.jpg';
import IMG3 from '../assets/3.jpg';
import IMG4 from '../assets/4.jpg';
import IMG5 from '../assets/5.jpg';
import IMG6 from '../assets/6.jpg';

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
                <button className='border-black border-[1px] w-32 h-10'>Comprar</button>
              </div>
            </div>
          </div>
          <div className=''>
            <img src={IMG0} className='h-full' />
          </div>
        </div>
        <div className='w-full h-full p-5'>
          <div className='py-5 my-5'>
          <h2 className='text-center text-xl p-2'>Imprescindibles</h2>
          <h1 className='text-center font-bold text-4xl'>
            Mas
            <span className='title font-normal'> Vendidos</span>
          </h1>
          </div>
          <div className='flex p-2 justify-around '>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG1} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG2} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG3} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG4} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG5} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div className='w-[190px] h-[190px]'>
              <div className='w-full h-full'>
                <img src={IMG6} className='w-full h-full p-5' />
              </div>
              <div className='w-full h-full'>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>

          </div>
          <div>
            <button>Comprar mas vendidos</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Inicio