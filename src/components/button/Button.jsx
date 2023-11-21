import React from "react";
import Button from "@mui/material/Button";

export const CustomButton = ({ backgroundColor, ...props }) => {
  return (
    <Button
      variant={props.variant}
      className={props.className}
      sx={{
        backgroundColor,
        "&:hover": {
          backgroundColor: backgroundColor,
        },
      }}
      {...props}
    />
  );
};
