import { axiosConfig } from "./axiosConfig";

export const getClients = () => {
    return axiosConfig.get("client/all");
}