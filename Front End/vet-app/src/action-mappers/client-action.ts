import { getClients } from "../utilites/api";

export const clientTypes = {
  SUCCESSFUL_CLIENT_GET: "GET_CLIENT_SUCCESSFUL",
  UNSUCCESSFUL_CLIENT_GET: "GET_CLIENT_UNSUCCESSFUL"
};

export const getAllClients = () => async (dispatch: any) => {
  getClients()
    .then(res => {
      console.log("response found");
      if (res.status === 200) {
        dispatch({
          type: clientTypes.SUCCESSFUL_CLIENT_GET,
          payload: {
            client: res.data
          }
        });
      } else {
        dispatch({
          type: clientTypes.UNSUCCESSFUL_CLIENT_GET,
          payload: {
            clientMessage: "Failed to get client"
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: clientTypes.UNSUCCESSFUL_CLIENT_GET,
        payload: {
          clientMessage: "Failed to get client"
        }
      });
    });
};
