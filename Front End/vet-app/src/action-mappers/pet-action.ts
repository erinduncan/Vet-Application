import { getPets } from "../utilites/api";

export const petTypes = {
  SUCCESSFUL_PET_GET: "GET_PET_SUCCESSFUL",
  UNSUCCESSFUL_PET_GET: "GET_PET_UNSUCCESSFUL"
};

export const getAllPets = () => async (dispatch: any) => {
  getPets()
    .then(res => {
      console.log("response found");
      if (res.status === 200) {
        dispatch({
          type: petTypes.SUCCESSFUL_PET_GET,
          payload: {
            pet: res.data
          }
        });
      } else {
        dispatch({
          type: petTypes.UNSUCCESSFUL_PET_GET,
          payload: {
            petMessage: "Failed to get pet"
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: petTypes.UNSUCCESSFUL_PET_GET,
        payload: {
          petMessage: "Failed to get pet"
        }
      });
    });
};
