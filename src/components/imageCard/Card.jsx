import { useState } from "react";
import { useNavigate } from "react-router-dom"

const Card = ({ children }) => {
  const [isHovered, setIsHovered] =useState(false);

  const { 
    id,
    img, 
    imgHover,
    value,
    nombre, 
    precio 
  } = children

  const HandleMouseEnter = () => {
    setIsHovered(true);
  }

  const HandleMouseLeve = () => {
    setIsHovered(false);
  }

  const navigate = useNavigate();
  const toDescription = () => {
    navigate('/bellezaProject/view/description', { 
      state: { 
        id: id,
        img: img,
        name: nombre,
        prize: precio,
        value: value
      }
    },
    );
  }

  return (
    <div onClick={toDescription} className="cursor-pointer">
        <div className='w-[190px] h-[190px]'>
            <img 
              src={isHovered ? imgHover : img }  
              className='w-full h-full p-5' 
              onMouseEnter={HandleMouseEnter}
              onMouseLeave={HandleMouseLeve}
            />
        </div>
        <div className='w-[190px]'>
            <h2 className='mx-2 text-sm text-center mb-2'>{nombre}</h2>
            <span className='block text-center'>{precio}</span>
        </div>
    </div>
  )
}

export default Card