import React, { useState } from 'react'
import Input from '../components/inputs/Input'
import FloattingMessage from '../components/floatmessage/FloattingMessage';
import '../App.css'
import InputImage from '../components/inputimage/InputImage';
import { Select } from '../components/select/Select';

const AddProduct = () => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [nameProduct, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [typeofproduct, setTypeofproduct] = useState(''); 

  const handleTypeChange = (event) => {
    setTypeofproduct(event.target.value);
  };

  const handleImageChange1 = (imageData) => {
    setImage1(imageData);
  };

  const handleImageChange2 = (imageData) => {
    setImage2(imageData);
  };

  const handleNameChange = (value) => {
    setNameProduct(value)
  }
  
  const handlePriceChange = (value) => {
    setPrice(value)
  }

  const handleDescriptionChange = (value) => {
    setDescription(value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image1', image1);
    formData.append('image2', image2);
    formData.append('name', nameProduct);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('typeproduct', typeofproduct);
    console.log(Object.fromEntries(formData));

    try {
      const response = await fetch('http://localhost:3001/api/uploadImg', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setIsSubmitted(true);
        setError("");
      } else {
        setIsSubmitted(false);
        setError("Error al mandar formulario");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className='border-b-[1px] border-gray-400 p-8 m-8'>
        <h1 className='font-bold text-xl'>Add New Products</h1>
      </div>
      {isSubmitted && <FloattingMessage message="Form submitted successfully!" />}
      {error && <FloattingMessage message={error} />}
      <div>
        <form onSubmit={handleSubmit}>
          <div className='border-b-[1px] border-gray-400'>
            <div className='mb-16 w-auto'>
      <div className='flex justify-evenly'>
        <div>
          <InputImage 
            onChange={handleImageChange1}
            inputId="file-input-1" 
          />
            <div className='border-black border-[1px] w-[300px] h-[350px] my-3'>
            {
              image1 && 
                <div className='w-[300px] h-[350px]'>
                  <img src={image1} className='w-full h-full' alt="Preview 1" />
                </div>
            }
            </div>
        </div>
        <div>
          <InputImage 
            onChange={handleImageChange2}
            inputId="file-input-2" 
            />
            <div className='border-black border-[1px] w-[300px] h-[350px] my-3'>
            {
              image2 && 
              <div className='w-[300px] h-[350px]'>
                <img src={image2} className='w-full h-full' alt="Preview 2" />
              </div>
            }
            </div>
        </div>
      </div>
        </div>
          </div>
          <div className='flex flex-wrap justify-center'>
            <div>
              <Input label="Name" value={nameProduct} onChange={handleNameChange} />
            </div>
            <div>
              <Input label='Price' value={price} onChange={handlePriceChange} />
            </div>
            <div>
              <Input label="Description" value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
              <div className='relative m-12 w-96'>
                <Select />
              </div>
            </div>
          </div>
          <div className='p-16 ml-40'>
            <button className='border-[1.5px] font-semibold border-black rounded-lg w-52 h-9 hover:bg-black hover:text-white file-input' type='submit'>Crear nuevo producto</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct