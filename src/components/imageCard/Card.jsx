import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Card = ({ props }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { id, img, imghover, price, name } = props;

  const HandleMouseEnter = () => {
    setIsHovered(true);
  };

  const HandleMouseLeve = () => {
    setIsHovered(false);
  };

  const navigate = useNavigate();
  const toDescription = () => {
    navigate("/bellezaProject/view/description", {
      state: {
        id: id,
        img: img,
        name: name,
        prize: price,
      },
    });
  };

  return (
    <Link
      to={`/bellezaProject/view/description?id=${id}&img=${img}&name=${name}&price=${price}`}
    >
      <div>
        <div className="w-[190px] h-[190px]">
          <img
            src={
              isHovered
                ? `http://localhost:3001/uploads/${imghover}`
                : `http://localhost:3001/uploads/${img}`
            }
            className="w-full h-full p-5"
            onMouseEnter={HandleMouseEnter}
            onMouseLeave={HandleMouseLeve}
          />
        </div>
        <div className="w-[190px]">
          <h2 className="mx-2 text-sm text-center mb-2">{name}</h2>
          <span className="block text-center">${price}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
