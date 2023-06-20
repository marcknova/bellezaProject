import IMG0 from '../assets/img1-1.jpg';
import IMG7 from '../assets/7.jpg';
import IMG8 from '../assets/eyes.jpg';
import IMG9 from '../assets/face.jpg';
import IMG10 from '../assets/lips.jpg';
import { Link } from 'react-router-dom';
import { Images } from '../ImageObject/Images';
import Card from '../components/imageCard/Card';
import Carrusel from '../components/carrusel/Carrusel';

const Inicio = () => {

//663581
  
  return (
    <>
    <div className='bg-[#ffffff]'>
        <div className='w-full h-[400px] md:h-[43.6rem] bg-belleza1 md:bg-cover bg-no-repeat bg-contain flex justify-end bg-[#896491]'>
          <div className='w-full text-[#ffffff]'>
            <div className='md:absolute top-40 md:right-24 md:p-10 text-right my-20 mr-5'>
              <span>NUEVO LANZAMIENTO</span>
              <h1 className='font-bold md:text-4xl text-xl md:my-5'>Polvos mas brillosos</h1>
              <div>
                <div className='absolute top-[21.5rem] md:my-0 my-3 mx-5 md:mx-0 text-sm md:text-base text-left'>
                  <p className='w-96'>Conoce nuestras nuevas sombras de ojos con un acabado brillante, textura suave y ligera y fijación de 10 horas</p>
                  <div className='mt-5'>
                    <button className='border-[#663581] border-[1px] w-32 h-10 hover:border-none hover:bg-[#663581] hover:text-[#e5b3fe]'>
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='w-full text-end'>
            <img src={IMG0} className='w-full h-full' />
          </div> */}
        </div>
        <div className='w-full h-full mb:p-2 mb-10 py-10' id='masvendido'>
          <div className='py-5 my-5'>
          <h2 className='text-center text-xl p-2'>Imprescindibles</h2>
          <h1 className='text-center font-bold text-4xl'>
            Mas
            <span className='title font-normal'> Vendidos</span>
          </h1>
          </div>
          <div className='flex flex-wrap md:p-2 md:m-3 justify-around '>
            {
              Images.map((data) => 
            <div key={data.id}>
                    <Card children={data} />
            </div>
                )
              }
          </div>
          <div className='text-center md:my-12 my-8'>
            <Link to={"/bellezaProject/masvendido"}>
              <button className='border-black font-semibold hover:bg-black hover:text-[#ffffff] border-[1px] w-56 h-10'>Comprar mas vendidos</button>
            </Link>
          </div>
        </div>  
        <div id='thirdSection'>
          <div className='flex md:flex-row flex-col mb-5 h-full md:h-[30rem]'>
            <div className='bg-[#e5b3fe] md:w-[50%] h-full md:p-7'>
              <div className='p-6 md:my-0 my-6 m-auto'>
                <span className='md:ml-10'>SUPER SEXY</span>
                <h1 className='font-extrabold md:text-2xl text-4xl my-4 md:ml-10'>Los labios mas vibrantes</h1>
                <p className='md:mx-10 md:my-0 my-8'> Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</p>
                <Link to={'/bellezaProject/labios'}>
                  <button className='bg-black text-[#e5b3fe] hover:bg-[#e5b3fe] font-semibold hover:text-black my-5 md:ml-10 w-48 h-9 border-[1px] border-black'>Comprar Labiales</button>
                </Link>
              </div>
            </div>
            <div className='md:absolute right-20 md:w-[50%] min-h-[50%]'>
              <img src={IMG7} className='w-full h-full md:mt-10' />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div id='fourthSection'>
          <div className='p-5 '>
            <h1 className='text-center font-bold text-2xl'>Descubre Mas</h1>
          </div>
            <div className='md:h-[38rem]'> 
            <div className='md:h-[38rem] md:relative z-10'>
                  <div className='flex md:flex-row flex-col md:justify-evenly'>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG8} className='w-full h-full' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG9} className='w-full h-full shadow-2xl' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG10} className='w-full h-full' />
                    </div>
                  </div>
            </div> 
              <div className='bg-[#e5b3fe] hidden md:block h-[30rem] md:relative bottom-[23rem]'>    
              </div>
            </div>
        </div>
        <div id='fiveSection'>
          <div className='flex flex-col-reverse md:flex-row h-full top-5 md:relative z-10'>
            <div className='md:w-1/2 h-[500px]'>
              <div className='w-full h-full bg-belleza md:bg-fixed md:bg-contain'></div>
              {/* <img src={IMG10} className='w-full h-full' /> */}
            </div>
            <div className='md:w-1/2 mt-20'>
              <div>
                <h1 className='mx-12 p-3'>SOLO ESTE FIN DE SEMANA</h1>
                <h1></h1>
              </div>
            </div>
          </div>
        </div>
        <div id='sixSection'>
          <div className='w-full h-auto bg-[#e5b3fe]'>
            <div className='flex flex-col md:flex-row p-5 md:m-5'>
              <div className='md:w-[40%] h-full m-auto text-center'>
                <h1 className='font-bold text-xl md:mt-0 mt-5'>Cuidados para la piel</h1>
              </div>
              <div className='md:w-[60%] h-full m-5 p-5'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore soluta modi vero beatae adipisci. Dolorem et officiis maiores veniam sapiente? Quam dolores amet blanditiis doloremque expedita. Porro, exercitationem pariatur.</p>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tempore soluta modi vero beatae adipisci. Dolorem et officiis maiores veniam sapiente? Quam dolores amet blanditiis doloremque expedita. Porro, exercitationem pariatur.</p>
              </div>
            </div>
          </div>
        </div>
        <div id='sevenSection'>
            <div>
              <h1 className='text-center font-bold text-xl my-10'>Siguenos</h1>
            </div>
          <div className='w-full'>
            <Carrusel />
          </div>
        </div>
    </div>
    </>
  )
}

export default Inicio