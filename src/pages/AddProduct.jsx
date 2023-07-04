import React, { useState } from 'react'
import Input from '../components/inputs/Input'

const AddProduct = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [nameProduc, setNameProduct] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [typeProduct, setTypeProduct] = useState('');

  const handleImageChange = (event, index) => {
    const files = event.target.files;
    const updatedSelectedImages = [...selectedImages];
    const updatedPreviewImages = [...previewImages];

  // Update the selected image at the specified index
  updatedSelectedImages[index] = files[0];

  // Update the preview image at the specified index
  updatedPreviewImages[index] = URL.createObjectURL(files[0]);

  setSelectedImages(updatedSelectedImages);
  setPreviewImages(updatedPreviewImages);
  };

  const handleNameChange = (value) => {
    setNameProduct(value)
  }
  
  const handlePriceChange = (value) => {
    setPrice(value)
  }

  const handleTypeProductChange = (value) => {
    setTypeProduct(value)
  }

  const handleDescriptionChange = (value) => {
    setDescription(value)
  }

  const handleSubmit = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/uploadImg', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        // Request failed
        const error = await response.json();
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      'img': previewImage1,
      'imgHover': previewImage2,
      'name of product': nameProduc,
      'value': value,
      'cantidad': cantidad
    }
    console.log(data);

  }  

  return (
    <div>
      <div className='border-b-[1px] border-gray-400 p-8 m-8'>
        <h1 className='font-bold text-xl'>Add New Products</h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div className='border-b-[1px] border-gray-400'>
            <div className='mb-16 w-auto'>
              <div className='inline-block w-1/2'>
                <div className='mx-10'>
                    <h1 className='font-semibold'>Agregar Imagen 1</h1>
                  </div>
                  <div className='relative top-60 left-96 inline-block'>
                    <div className="file-input-container inline-block">
                      <input type="file" id="file-input" accept="image/*" onChange={handleImageChange} className="file-input" />
                      <label htmlFor="file-input" className="file-label rounded-full w-14 h-14">
                        <i className="fa-solid fa-camera m-[0.4rem] text-xl"></i>
                      </label>
                    </div>
                </div>
                    <div className='w-80 h-80 ml-24 bg-slate-400 rounded-full'>
                      { previewImages && <img src={previewImages} className='w-full h-full rounded-full' /> }
                    </div>
              </div>
              <div className='inline-block w-1/2'>
                <div className='mx-10'>
                    <h1 className='font-semibold'>Agregar Imagen 1</h1>
                  </div>
                  <div className='relative top-60 left-96 inline-block'>
                    <div className="file-input-container inline-block">
                      <input type="file" id="file-input" accept="image/*" onChange={handleImageChange} className="file-input" />
                      <label htmlFor="file-input" className="file-label rounded-full w-14 h-14">
                        <i className="fa-solid fa-camera m-[0.4rem] text-xl"></i>
                      </label>
                    </div>
                </div>
                    <div className='w-80 h-80 ml-24 bg-slate-400 rounded-full'>
                      { previewImages && <img src={previewImages} className='w-full h-full rounded-full' /> }
                    </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap justify-center'>
            <div>
              <Input label="Name" value={nameProduc} onChange={handleNameChange} />
            </div>
            <div>
              <Input label='Price' value={price} onChange={handlePriceChange} />
            </div>
            <div>
              <Input label="Description" value={description} onChange={handleDescriptionChange} />
            </div>
            <div>
              <Input label="Type of Product" value={typeProduct} onChange={handleTypeProductChange} />
            </div>
          </div>
          <div className='p-16 ml-28'>
            <button className='border-[1.5px] font-semibold border-black rounded-full w-56 h-10 hover:bg-black hover:text-white' type='submit'>Crear nuevo producto</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct