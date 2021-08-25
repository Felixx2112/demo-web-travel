import axios from "axios";

const getDataApiFake = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

export const api = { getDataApiFake };
