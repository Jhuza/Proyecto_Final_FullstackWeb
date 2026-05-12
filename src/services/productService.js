// Base URL de la FakeStore API
const API_URL = "https://fakestoreapi.com";

// Trae todos los productos desde la API
export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  const data = await response.json();
  return data.sort((a, b) => Number(a.id) - Number(b.id));
};

// Trae un producto específico por su ID
export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const data = await response.json();
  return data ?? null;
};