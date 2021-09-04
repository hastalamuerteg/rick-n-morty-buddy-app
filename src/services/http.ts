//Libs
import axios from "axios";

export const API_ROUTES = {
  BASE_URL: "https://rickandmortyapi.com/api",
};

export const axiosInstance = axios.create({
  baseURL: API_ROUTES.BASE_URL,
  timeout: 5000,
});

export async function getData(url: string) {
  const { data } = await axiosInstance.get(url);
  return data;
}
