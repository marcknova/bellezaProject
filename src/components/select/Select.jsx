import React from "react";
import styles from "./Select.module.css";

export const Select = () => {
  return (
    <div className={styles["select-container"]}>
      <select className={styles.select}>
        <option value="labios">Labios</option>
        <option value="cara">Cara</option>
        <option value="ojos">Ojos</option>
      </select>
    </div>
  );
};

export default Select;
