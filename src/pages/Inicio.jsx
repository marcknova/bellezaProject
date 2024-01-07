import IMG7 from "../assets/maquillaje_roto_8085.webp";
import { Link } from "react-router-dom";
import { getProductData } from "../ImageObject/Images";
import Card from "../components/imageCard/Card";
import Carrusel from "../components/carrusel/Carrusel";
import { useState, useEffect } from "react";
import { CustomButton } from "../components/button/Button";
import { Footer } from "./../components/footer/Footer";

const Inicio = () => {
  //663581
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData()
      .then((data) => {
        setProductData(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-[#ffffff]">
        <div className="w-full lg:h-[100vh] bg-[url(./src/assets/img1-1.jpg)] md:bg-cover bg-no-repeat bg-contain flex justify-end bg-[#896491]">
          <div className="w-full flex flex-col items-end lg:mx-[12%] lg:my-[6%] lg:py-[9%] p-3 md:my-16 my-4 text-[#ffffff]">
            <div className="md:h-auto h-1/2 ">
              <div className="md:my-0 md:mr-5 my-16 mx-5 lg:px-0 md:px-10 lg:pt-0 md:pt-10">
                <span className="lg:text-lg md :text-base text-sm">
                  NUEVO LANZAMIENTO
                </span>
                <h1 className="font-bold lg:text-4xl md:text-2xl text-sm md:my-5">
                  Polvos mas brillosos
                </h1>
              </div>
            </div>
            <div className="md:h-auto h-1/2 flex flex-col justify-center sm:p-0 p-5">
              <p className="lg:w-96 md:w-80 lg:text-lg md:text-base mx-5 md:my-5 md:mx-0 text-sm py-3">
                Conoce nuestras nuevas sombras de ojos con un acabado brillante,
                textura suave y ligera y fijación de 10 horas
              </p>
              <div className="md:mt-5 md:m-0 m-4">
                <CustomButton
                  variant="contained"
                  className="w-32 h-10 my-5"
                  backgroundColor="#896491"
                >
                  Comprar
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full mb:p-2 mb-10 py-10" id="masvendido">
          <div className="py-5 my-5">
            <h2 className="text-center text-xl p-2">Imprescindibles</h2>
            <h1 className="text-center font-bold text-4xl">
              Mas
              <span className="title font-normal"> Vendidos</span>
            </h1>
          </div>
          <div className="flex flex-wrap md:p-2 md:m-3 justify-around ">
            {productData.map((data) => (
              <div key={data.id}>
                <Card props={data} />
              </div>
            ))}
          </div>
          <div className="text-center md:my-12 my-8">
            <Link to={"/bellezaProject/masvendido"}>
              <button className="border-black font-semibold hover:bg-black hover:text-[#ffffff] border-[1px] w-56 h-12 ease-in duration-200">
                Comprar Mas Vendidos
              </button>
            </Link>
          </div>
        </div>
        <div id="thirdSection">
          <div className="mb-5 w-full h-full">
            <div className="bg-[#000000] text-white h-full">
              <div className="flex lg:flex-row-reverse flex-col-reverse">
                <div className="lg:w-1/2">
                  <div className="lg:p-10 md:m-12 p-20">
                    <h1 className="font-bold md:text-4xl text-xl mb-10 ">
                      BUY WHAT YOU LOVE
                    </h1>
                    <p className="leading-8 md:text-base text-sm">
                      En React, hay varias bibliotecas populares que contienen
                      componentes de carruseles de imágenes. Estas bibliotecas
                      suelen ofrecer una amplia variedad de opciones de
                      personalización y funcionalidades para la creación de
                      carruseles de imágenes interactivos en tus aplicaciones
                      web. Algunas de las bibliotecas de carruseles de imágenes
                      más utilizadas en React son
                    </p>
                    <button className=" text-white rounded w-36 h-11 mt-8 hoverBg">
                      READ MORE
                    </button>
                  </div>
                </div>
                <div className="lg:w-1/2 h-full">
                  <img src={IMG7} className="w-full h-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fourthSection">
          <div className="">
            <div className="flex justify-center font-bold text-4xl my-28">
              <h1 className="mx-2 font-bold">Descubre</h1>
              <h1 className="font-normal">Mas</h1>
            </div>
          </div>
          <div className="md:h-[38rem]">
            <div className="md:h-[38rem] relative z-10">
              <div className="flex md:flex-row flex-col md:justify-evenly">
                <div className="md:w-[400px] md:h-[520px] w-full h-[320px]">
                  <div className="relative h-full">
                    <img
                      src="https://static.wixstatic.com/media/2e2a49_5bd77ef9eecc40d4857c35dd6aa1db9c~mv2.jpg/v1/fill/w_518,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_5bd77ef9eecc40d4857c35dd6aa1db9c~mv2.jpg"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg overflow-hidden bg-black opacity-50"></div>
                  </div>
                </div>
                <div className="md:w-[400px] md:h-[520px] w-full h-[320px]">
                  <div className="relative h-full">
                    <img
                      src="https://static.wixstatic.com/media/2e2a49_5446b99efef6467b8bb512150a2f20c3~mv2.jpg/v1/fill/w_541,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_5446b99efef6467b8bb512150a2f20c3~mv2.jpg"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg overflow-hidden bg-black opacity-50"></div>
                  </div>
                </div>
                <div className="md:w-[400px] md:h-[520px] w-full h-[320px]">
                  <div className="relative h-full">
                    <img
                      src="https://static.wixstatic.com/media/2e2a49_07316c336b444872ac520388bdb042b4~mv2.jpg/v1/fill/w_541,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2e2a49_07316c336b444872ac520388bdb042b4~mv2.jpg"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg overflow-hidden bg-black opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-[#000000] hidden md:block h-[30rem] bottom-[23rem]">
              <div className="grid grid-cols-3 text-center relative z-20 text-white font-bold text-6xl">
                <div className="mx-auto mt-48">
                  <span className="text-xl">COMPRAR</span>
                  <h1 className="my-3">OJOS</h1>
                </div>
                <div className="mx-auto mt-48">
                  <span className="text-xl">COMPRAR</span>
                  <h1 className="my-3">CARA</h1>
                </div>
                <div className="mx-auto mt-48">
                  <span className="text-xl">COMPRAR</span>
                  <h1 className="my-3">LABIOS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="fiveSection">
          <div className="flex flex-col-reverse lg:flex-row h-full top-5 md:relative z-10">
            <div className="lg:w-1/2 h-[700px]">
              <div className="w-full h-full bg-belleza md:bg-fixed bg-cover md:bg-contain"></div>
            </div>
            <div className="lg:w-1/2">
              <div>
                <div className="p-10 md:mx-36 md:mt-32 lg:mt-48">
                  <h1 className="font-mono text-lg">SOLO ESTE FIN DE SEMANA</h1>
                  <p className="leading-8 text-4xl my-5">
                    15% en todo el sitio
                  </p>
                  <p className="leading-7 my-1">
                    Lorem input no se que asdsajdn asj oasi jdasoj doaskdjsaoi
                    jaso jdasoidj aosidjasoidjao jasoij oaisjdasoi jd
                  </p>
                  <p className="leading-7 mt-5 font-bold">
                    Usa el código MIR15 al pagar
                  </p>
                  <div className="my-8">
                    <button className="border-black font-semibold hover:bg-black hover:text-[#ffffff] border-[1px] w-40 h-12 ease-in duration-200">
                      Comprar Todo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="sixSection">
          <div className="w-full h-auto bg-[#896491] text-white">
            <div className="flex flex-col lg:flex-row p-5 md:m-5">
              <div className="md:w-[40%] h-full m-auto text-center">
                <h1 className="font-bold text-xl md:mt-5 mt-10 text-end">
                  Cuidados para la piel
                </h1>
              </div>
              <div className="lg:w-[60%] h-full md:ml-16 lg:mr-40 my-10 p-5">
                <p className="leading-8 lg:ml-28 lg:mx-32">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  tempore soluta modi vero beatae adipisci. Dolorem et officiis
                  maiores veniam sapiente? Quam dolores amet blanditiis
                  doloremque expedita. Porro, exercitationem pariatur. Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Magni
                  tempore soluta modi vero beatae adipisci. Dolorem et officiis
                  maiores veniam sapiente? Quam dolores amet blanditiis
                  doloremque expedita. Porro, exercitationem pariatur.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="sevenSection">
          <div>
            <h1 className="text-center font-bold text-xl my-10">Siguenos</h1>
          </div>
          <div className="w-full md:my-0 my-10"></div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
