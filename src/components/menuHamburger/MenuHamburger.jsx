import { useContext } from "react";
import "./MenuHamburger.css";
import { HamburgerContext } from "../../context/UseHamburger";

const MenuHamburger = () => {
  const { hamburger, setHamburger } = useContext(HamburgerContext);
  return (
    <>
      <div className="lg:hidden absolute left-[82%] md:left-[89%]">
        <button
          type="button"
          title="hamburger"
          id="button-menu"
          className={hamburger ? "button-menu close" : "button-menu"}
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
