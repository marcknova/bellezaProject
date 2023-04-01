import { useState } from "react";
import "./menuHamburger.css";

const MenuHamburger = () => {

  const [hamburger, setHamburger] = useState(true);
  return (
    <>
      <div className="md:hidden absolute left-[82%]">
        <button
          type="button"
          title="hamburger"
          id="button-menu"
          className={hamburger ? "button-menu" : "button-menu close"}
          onClick={() => setHamburger(!hamburger)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
};

export default MenuHamburger;
