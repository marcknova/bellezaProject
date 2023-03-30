import IMG0 from '../assets/img1.jpg';
import IMG1 from '../assets/1.jpg';
import IMG2 from '../assets/2.jpg';
import IMG3 from '../assets/3.jpg';
import IMG4 from '../assets/4.jpg';
import IMG5 from '../assets/5.jpg';
import IMG6 from '../assets/6.jpg';
import IMG7 from '../assets/7.jpg';
import IMG8 from '../assets/8.jpg';
import IMG9 from '../assets/9.jpg';
import IMG10 from '../assets/10.jpg';

const Inicio = () => {
  return (
    <>
    <div className='bg-[#ff97d9]'>
        <div className='h-[400px] flex justify-end bg-[#e5b3fe]'>
          <div className='w-full'>
            <div className='absolute top-24 left-0 md:p-10 md:ml-[17%]'>
              <span>NUEVO LANZAMIENTO</span>
              <h1 className='font-bold md:text-4xl text-xl my-5'>Polvos mas brillosos</h1>
              <div>
              <p className='w-96'>Conoce nuestras nuevas sombras de ojos con un acabado brillante, textura suave y ligera y fijación de 10 horas</p>
              <div className='mt-5'>
                <button className='border-black border-[1px] w-32 h-10'>
                  Comprar
                </button>
              </div>
              </div>
            </div>
          </div>
          <div className='w-full text-end'>
            <img src={IMG0} className='w-full h-full' />
          </div>
        </div>
        <div className='w-full h-full mb:p-2 mb-10' id='masvendido'>
          <div className='py-5 my-5'>
          <h2 className='text-center text-xl p-2'>Imprescindibles</h2>
          <h1 className='text-center font-bold text-4xl'>
            Mas
            <span className='title font-normal'> Vendidos</span>
          </h1>
          </div>
          <div className='flex flex-wrap md:p-2 md:m-3 justify-around '>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG1} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG2} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG3} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG4} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG5} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG6} className='w-full h-full p-5' />
              </div>
              <div>
                <h2 className='mx-5'>Rimel de no se que</h2>
                <span className='block text-center'>$54.00</span>
              </div>
            </div>

          </div>
          <div className='text-center md:my-5 my-8'>
            <button className='border-black hover:bg-black hover:text-[#ff97d9] border-[1px] w-56 h-10'>Comprar mas vendidos</button>
          </div>
        </div>  
        <div id='thirdSection'>
          <div className='flex md:flex-row flex-col mb-5 h-full md:h-[30rem]'>
            <div className='bg-[#e5b3fe] md:w-[50%] h-full md:p-7'>
              <div className='p-6 md:my-0 my-6 m-auto'>
                <span className='md:ml-10'>SUPER SEXY</span>
                <h1 className='font-extrabold md:text-2xl text-4xl my-4 md:ml-10'>Los labios mas vibrantes</h1>
                <p className='md:mx-10 md:my-0 my-8'> Párrafo. Haz clic aquí para agregar tu propio texto y editar. Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.</p>
              <button className='bg-black text-[#e5b3fe] hover:bg-[#e5b3fe] font-semibold hover:text-black my-5 md:ml-10 w-48 h-9 border-[1px] border-black'>Comprar Labiales</button>
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
            <div className='md:h-[38rem] bg-[#ff97d9]'> 
            <div className='md:h-[38rem] md:relative z-10'>
                  <div className='flex md:flex-row flex-col md:justify-evenly'>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG8} className='w-full h-full' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG9} className='w-full h-full' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-full h-[320px]'>
                      <img src={IMG8} className='w-full h-full' />
                    </div>
                  </div>
            </div> 
              <div className='bg-[#e5b3fe] hidden md:block h-[30rem] md:relative bottom-[23rem]'>    
              </div>
            </div>
        </div>
        <div id='fiveSection'>
          <div className='flex flex-col-reverse md:flex-row h-full top-5 md:relative z-10'>
            <div className='md:w-1/2 bg-fixed'>
              <img src={IMG10} className='w-full h-full' />
            </div>
            <div className='md:w-1/2 m-auto'>
              <div className='w-full h-full'>
                <h1 className='mx-12 p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, dolorum distinctio quae suscipit cupiditate beatae itaque aliquid, sint placeat, nulla aspernatur laborum libero quia fugiat id molestias excepturi labore officia.</h1>
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
            <div>
              <h1 className='text-center font-bold text-xl my-10'>Siguenos</h1>
            </div>
            <div className='flex flex-col md:flex-row'>
              <div className='w-full h-[200px]'>
                <img src={IMG1} className='w-full h-full' />
              </div>
              <div className='w-full h-[200px]'>
                <img src={IMG5} className='w-full h-full'/>
              </div>
              <div className='w-full h-[200px]'>
                <img src={IMG3} className='w-full h-full'/>
              </div>
              <div className='w-full h-[200px]'>
                <img src={IMG8} className='w-full h-full'/>
              </div>
              <div className='w-full h-[200px]'>
                <img src={IMG4} className='w-full h-full'/>
              </div>
              <div className='w-full h-[200px]'>
                <img src={IMG2} className='w-full h-full'/>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className='bg-[#e5b3fe] flex flex-col md:flex-row p-10'>
              <div className='md:w-[20%]'>
                <div className='md:mx-5 md:mb-0 mb-5'>
                  <h1 className='mb-3'>Comprar</h1>
                  <ul>
                    <li>Productos Nuevos</li>
                    <li>Mas Vendidos</li>
                    <li>Labios</li>
                    <li>Ojos</li>
                  </ul>
                </div>
              </div>
              <div className='md:w-[20%] md:mb-0 mb-2'>
                <h1 className='mb-3'>Tienda</h1>
                <p>Ote 5 #964 Orizaba, Ver</p>
              </div>
              <div className='md:w-[25%]'>
                <h1 className='mb-3'>Atencion Al Cliente</h1>
                <h1 className='mb-1 font-bold'>Phone: <span className='font-normal'>2722085138</span></h1>
                <h1 className='mb-1 font-bold'>Email: <span className='font-normal'>marck.noval@gmail.com</span></h1>
              </div>
              <div className='md:w-[35%]'>
                <h1 className='font-extrabold text-end mt-[30%]'>Todos los derechos reservados</h1>
              </div>
          </div>
        </footer>
    </div>
    </>
  )
}

export default Inicio