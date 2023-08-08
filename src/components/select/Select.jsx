// Select component
import React from "react";
import styles from "./Select.module.css";

export const Select = ({ handleTypeChange, value }) => {
  return (
    <div className={styles["select-container"]}>
      <select className={styles.select} value={value} onChange={handleTypeChange}>
        <option>Tipo de producto</option>
        <option value="labios">Labios</option>
        <option value="cara">Cara</option>
        <option value="ojos">Ojos</option>
      </select>
    </div>
  );
};

export default Select;
