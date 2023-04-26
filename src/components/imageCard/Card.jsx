import { useNavigate } from "react-router-dom"

const Card = ({ children }) => {
  
  const { 
    img, 
    nombre, 
    precio 
  } = children

  const navigate = useNavigate();

  const toDescription = () => {
    navigate('/bellezaProject/view/description', { 
      state: { 
        img: img,
        name: nombre,
        prize: precio
      }
    },
    );
  }

  return (
    <div onClick={toDescription} className="cursor-pointer">
        <div className='w-[190px] h-[190px]'>
            <img src={img} className='w-full h-full p-5' />
        </div>
        <div className='w-[190px]'>
            <h2 className='mx-2 text-sm text-center mb-2'>{nombre}</h2>
            <span className='block text-center'>{precio}</span>
        </div>
    </div>
  )
}

export default Card