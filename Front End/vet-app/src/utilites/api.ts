import { axiosConfig } from "./axiosConfig";
import Axios from "axios";

export const getClients = () => {
  return axiosConfig.get("client/all");
};

export const client = Axios.create({
  baseURL: "https://api.myjson.com/bins/6g7xw"
});

export const login = Axios.create({
  baseURL: "https://api.myjson.com/bins/hr2e4"
});

export const userLogin = () => {
  return login.get("");
};

export const allData = async () => {
  let appData = "";
  try {
    const response = await Axios.get("");
    if (response.status === 200) {
      appData = response.data;
      return appData;
    } else {
      return appData;
    }
  } catch (e) {
    console.log(e);
  }
};
