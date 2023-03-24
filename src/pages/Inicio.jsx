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
              <div className='bg-[#e5b3fe] h-96 relative bottom-[23rem]'>    
              </div>
            </div>
        </div>
        <div id='fiveSection'>
          <div>
            <img src={IMG10} className='w-full h-full' />
          </div>
          <div>
            <h1>texto descriptivo</h1>
          </div>
        </div>
    </div>
    </>
  )
}

export default Inicio