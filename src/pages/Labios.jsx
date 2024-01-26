import img from "../assets/16.jpg";

const Labios = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="bg-moresale h-[240px]">
          {/* <img src={IMG1} className='w-full h-full' /> */}
          <div className="p-5">
            <h1 className="text-4xl text-center m-20">Labios</h1>
          </div>
        </div>
      </div>
      <div className="p-2 md:p-5">
        <div className="flex flex-row p-3 flex-wrap justify-center m-3">
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8 my-6">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8 my-6">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8 my-6">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
          <div className="w-[145px] md:basis-[25%] p-2 md:mx-8">
            <img src={img} />
            <div className="my-3 p-2 text-center">
              <h2>Sombras de ojos cobrizo</h2>
              <span className="text-gray-600">$120.00</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Labios;
