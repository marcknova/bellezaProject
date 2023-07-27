export const getProductData = () => {
  return fetch("http://localhost:3001/api/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
