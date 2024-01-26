import React from "react";
import styles from "./InputImage.module.css";

const InputImage = ({ onChange, inputId, label }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result); // Pass the image data to the parent component
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles["file-input-container"]}>
      <label htmlFor={inputId} className={styles["file-label"]}>
        {label}
      </label>
      <input
        type="file"
        id={inputId}
        accept="image/*"
        onChange={handleImageChange}
        className={styles["file-input"]}
      />
    </div>
  );
};

export default InputImage;
