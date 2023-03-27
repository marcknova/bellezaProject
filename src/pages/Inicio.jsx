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
        <div className='w-full h-full p-2 mb-10' id='masvendido'>
          <div className='py-5 my-5'>
          <h2 className='text-center text-xl p-2'>Imprescindibles</h2>
          <h1 className='text-center font-bold text-4xl'>
            Mas
            <span className='title font-normal'> Vendidos</span>
          </h1>
          </div>
          <div className='flex flex-wrap p-2 m-3 justify-around '>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG1} className='w-full h-full p-5' />
              </div>
              <div >
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG2} className='w-full h-full p-5' />
              </div>
              <div>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG3} className='w-full h-full p-5' />
              </div>
              <div>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG4} className='w-full h-full p-5' />
              </div>
              <div>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG5} className='w-full h-full p-5' />
              </div>
              <div>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>
            <div>
              <div className='w-[190px] h-[190px]'>
                <img src={IMG6} className='w-full h-full p-5' />
              </div>
              <div>
                <h2>Rimel de no se que</h2>
                <span>$54.00</span>
              </div>
            </div>

          </div>
          <div className='text-center my-5'>
            <button className='border-black border-[1px] w-56 h-10'>Comprar mas vendidos</button>
          </div>
        </div>  
        <div id='thirdSection'>
          <div className='flex mb-5 h-full md:h-[30rem]'>
            <div className='bg-[#e5b3fe] w-[50%] h-full'>
              <div className='p-6 m-auto'>
                <h1 className='font-extrabold text-2xl my-4 ml-10'>Labios mas brillosos</h1>
                <p className='mx-10'> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <button className='my-5 ml-10'>Comprar Labiales</button>
              </div>
            </div>
            <div className='absolute right-20 w-[50%] min-h-[50%]'>
              <img src={IMG7} className='w-full h-full mt-10' />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div id='fourthSection'>
          <div className='p-5 '>
            <h1 className='text-center font-bold text-2xl'>Descubre Mas</h1>
          </div>
            <div className='h-[38rem] bg-[#ff97d9]'> 
            <div className='h-[38rem] relative z-10'>
                  <div className='flex md:flex-row flex-col justify-evenly'>
                    <div className='md:w-[345px] md:h-[520px] w-[320px] h-[300px]'>
                      <img src={IMG8} className='w-full h-full' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-[320px] h-[300px]'>
                      <img src={IMG9} className='w-full h-full' />
                    </div>
                    <div className='md:w-[345px] md:h-[520px] w-[320px] h-[300px]'>
                      <img src={IMG8} className='w-full h-full' />
                    </div>
                  </div>
            </div> 
              <div className='bg-[#e5b3fe] h-[30rem] relative bottom-[23rem]'>    
              </div>
            </div>
        </div>
        <div id='fiveSection'>
          <div className='flex h-full top-5 relative z-10'>
            <div className='w-1/2 bg-fixed'>
              <img src={IMG10} className='w-full h-full' />
            </div>
            <div className='w-1/2 m-auto'>
              <div className='w-full h-full'>
                <h1 className='mx-12 p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, dolorum distinctio quae suscipit cupiditate beatae itaque aliquid, sint placeat, nulla aspernatur laborum libero quia fugiat id molestias excepturi labore officia.</h1>
              </div>
            </div>
          </div>
        </div>
        <div id='sixSection'>
          <div className='w-full h-auto bg-[#e5b3fe]'>
            <div className='flex p-5 m-5'>
              <div className='w-[40%] h-full m-auto text-center'>
                <h1 className='font-bold text-xl'>Cuidados para la piel</h1>
              </div>
              <div className='w-[60%] h-full m-5 p-5'>
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
            <div className='flex'>
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
          <div className='bg-[#e5b3fe] flex p-10'>
              <div className='w-[20%]'>
                <div className='mx-5'>
                  <h1 className='mb-3'>Comprar</h1>
                  <ul>
                    <li>Productos Nuevos</li>
                    <li>Mas Vendidos</li>
                    <li>Labios</li>
                    <li>Ojos</li>
                  </ul>
                </div>
              </div>
              <div className='w-[20%]'>
                <h1 className='mb-3'>Tienda</h1>
                <p>Ote 5 #964 Orizaba, Ver</p>
              </div>
              <div className='w-[25%]'>
                <h1 className='mb-3'>Atencion Al Cliente</h1>
                <h1 className='mb-1 font-bold'>Phone: <span className='font-normal'>2722085138</span></h1>
                <h1 className='mb-1 font-bold'>Email: <span className='font-normal'>marck.noval@gmail.com</span></h1>
              </div>
              <div className='w-[35%]'>
                <h1 className='font-extrabold text-end mt-[30%]'>Todos los derechos reservados</h1>
              </div>
          </div>
        </footer>
    </div>
    </>
  )
}

export default Inicio