import React from 'react'

const Input = ({ label, value, onChange }) => {
  
  const handleChange = (e) => {
    onChange(e.target.value)
   }

  return (
    <div>
        <div className="relative z-0 m-12 w-96">
            <input type="text" id="default_standard" value={value} className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={handleChange} placeholder=" " />
            <label htmlFor="default_standard" className="absolute text-sm text-[#000000] dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>
    </div>
    </div>
  )
}

export default Input