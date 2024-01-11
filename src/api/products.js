import { api } from "./api";

// ----------МІЙ КОД------------//////\
// export const getAllProducts = async () => {
//   const { data } = await api("products");
//   return data;
// };

// ----------КОД ВИКЛАДАЧА------------//////\
export const getAllProducts = async (skip, limit) => {
  const { data } = await api(`products?limit=${limit}&skip=${skip}`);
  return data;
};

export const getSingleProduct = async (id) => {
  const { data } = await api(`products/${id}`);
  return data;
};
