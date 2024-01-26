import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const Carrusel = () => {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://i.pinimg.com/736x/78/94/6d/78946d5ffe8fb2a28b9c9654cd943518.jpg"
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://st2.depositphotos.com/1010669/6303/i/450/depositphotos_63032751-stock-photo-brush-with-powder.jpg"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://img.freepik.com/fotos-premium/productos-belleza-flores-rosas-sobre-fondo-rosa-suave-productos-cosmeticos-cuidado-piel_656098-653.jpg"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA2L3RwMjE2LWEwMDkta2Fib29tcGljcy0yNzEtMDFqXzEuanBn.jpg"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-[300px] h-[300px] ">
            <img
              src="https://img.freepik.com/fotos-premium/conjunto-productos-belleza-cuidado-piel-o-cabello-cuidado-cuerpo-productos-cosmeticos-calidad-piel-marca-tubos-blancos-maqueta-vista-superior-sobre-fondo-color_547937-831.jpg"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px]">
            <img
              src="https://img.goodfon.com/wallpaper/big/9/3b/makeup-artist-makeup.jpg"
              className="w-full h-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carrusel;
