import React, { useContext } from "react";
import Input from "../components/inputs/Input";
import "../App.css";
import { Select } from "../components/select/Select";
import InputImage from "../components/inputs/inputimage/InputImage";
import { Formik, Form } from "formik";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { CartContext } from "../context/UseCart";
import { AuthContext } from "../context/UseAuth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AddProduct = () => {
  const { cartState, addProduct } = React.useContext(CartContext);
  const [typeofproduct, setTypeofproduct] = React.useState("");
  const [image1, setImage1] = React.useState(null);
  const [image2, setImage2] = React.useState(null);
  const [type, setType] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const { authState } = useContext(AuthContext);

  React.useEffect(() => {
    if (cartState.isCorrect) {
      setType("success");
      setMessage("Producto Agregado");
      handleClick();
    } else {
      setType("error");
      setMessage("LLena todos los datos");
      handleClick();
    }
  }, [cartState.isCorrect]);

  const validate = (values) => {
    const errors = {};
    const isValidName = /^[a-zA-Z0-9\sñÑáéíóúÁÉÍÓÚ.,;:'"()!?]+$/;
    const isValidPrice = /^[0-9]+$/;
    const isValidDescription = /^[a-zA-Z0-9\sñÑáéíóúÁÉÍÓÚ.,;:'"()!?]+$/;

    if (!values.name) {
      errors.name = "El Nombre es requerido";
    } else if (!isValidName.test(values.name)) {
      errors.name = "No se pueden usar símbolos en el nombre";
    }

    if (!values.price) {
      errors.price = "El Precio es requerido";
    } else if (!isValidPrice.test(values.price)) {
      errors.price = "Solo números";
    }

    if (!values.description) {
      errors.description = "La Descripción es requerida";
    } else if (!isValidDescription.test(values.description)) {
      errors.description = "No se pueden usar símbolos en la descripción";
    }

    return errors;
  };

  const handleTypeChange = (event, setFieldValue) => {
    const selectedType = event.target.value;

    setTypeofproduct(selectedType);
    setFieldValue("typeproduct", selectedType);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleImageChange1 = (imageData) => {
    setImage1(imageData);
  };

  const handleImageChange2 = (imageData) => {
    setImage2(imageData);
  };

  const handleSubmit = (values) => {
    addProduct({ ...values, img: image1, imghover: image2 }, authState.token);
  };
  return (
    <div>
      <div className="border-b-[1px] border-gray-400 p-8 m-8">
        <h1 className="font-bold text-xl">Add New Products</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            typeproduct: typeofproduct,
          }}
          validate={validate}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(formikProps) => (
            <Form>
              <div className="border-b-[1px] border-gray-400">
                <div className="mb-16 w-auto">
                  <div className="flex md:justify-evenly md:flex-row flex-col">
                    <div>
                      <InputImage
                        onChange={handleImageChange1}
                        inputId="file-input-1"
                        label="Select Primary Image"
                      />
                      {!image1 ? (
                        <div className="w-[300px] mt-5 h-[350px]">
                          <img
                            src="https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"
                            alt="preload"
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-[300px] mt-5 h-[350px]">
                          <img
                            src={image1}
                            className="w-full h-full"
                            alt="Preview 1"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <InputImage
                        onChange={handleImageChange2}
                        inputId="file-input-2"
                        label="Select Second Image"
                        value={image1}
                      />
                      {!image2 ? (
                        <div className="w-[300px] mt-5 h-[350px]">
                          <img
                            src="https://returntofreedom.org/store/wp-content/uploads/default-placeholder.png"
                            alt="preload"
                            className="w-full h-full"
                          />
                        </div>
                      ) : (
                        <div className="w-[300px] mt-5 h-[350px]">
                          <img
                            src={image2}
                            className="w-full h-full"
                            alt="Preview 1"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="mx-auto grid md:grid-cols-2 grid-rows-2 py-10">
                  <div className="relative z-0 my-8 md:w-full w-auto flex md:ml-16 justify-center group ">
                    <Input
                      type="text"
                      label="Nombre del producto"
                      name="name"
                    />
                  </div>
                  <div className="relative z-0 my-8 w-full group">
                    <Input type="text" label="Precio" name="price" />
                  </div>
                  <div className="relative z-0 my-8 w-full flex md:ml-16 justify-center group">
                    <Input type="text" label="Descripcion" name="description" />
                  </div>
                  <div className="relative z-0 w-full  group">
                    <div className="relative my-10 w-96">
                      <Select
                        handleTypeChange={(event) =>
                          handleTypeChange(event, formikProps.setFieldValue)
                        }
                        value={typeofproduct}
                      />
                    </div>
                  </div>
                  <div className="w-full lg:ml-60 md:ml-16 md:my-20 ml-5 my-5">
                    <button
                      type="submit"
                      className="text-white lg:w-[25%] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm sm:w-auto px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Crear producto
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
              {message}
            </Alert>
          </Snackbar>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
