import React from "react";
import { getProductData } from "../api/Images";

export const AdminData = () => {
  const [productData, setProductData] = React.useState([]);

  React.useEffect(() => {
    getProductData()
      .then((data) => {
        setProductData(data.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, []);

  return (
    <div>
      <div className="px-5 mt-8 mx-5">
        <h1 className="font-bold text-lg">Admin Data</h1>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-5 my-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre del producto
              </th>
              <th scope="col" className="px-6 py-3">
                cantidad
              </th>
              <th scope="col" className="px-6 py-3">
                Categoria
              </th>
              <th scope="col" className="px-6 py-3">
                Precio
              </th>
              <th scope="col" className="px-6 py-3">
                Accion
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((item) => (
              <tr className="bg-white border-b" key={item.id}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">{item.typeproduct}</td>
                <td className="px-6 py-4">{item.price}</td>
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className="font-medium text-blue-60 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
