import { axiosConfig } from "./axiosConfig";
import Axios from "axios";

export const getClients = () => {
    return axiosConfig.get("client/all");
}

export const client = Axios.create({
    baseURL : ""
})

export const login = Axios.create({
    baseURL : "https://api.myjson.com/bins/hr2e4"
})

export const userLogin = () => {
    return login.get("");
}