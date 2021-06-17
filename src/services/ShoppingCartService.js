import axios from "./Axios";

export const getProducts = async () => {
  const { data } = await axios.get("list");
  return data;
};
