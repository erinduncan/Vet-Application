import { getEmployees } from "../utilites/api";

export const employeeTypes = {
  SUCCESSFUL_EMPLOYEE_GET: "GET_EMPLOYEE_SUCCESSFUL",
  UNSUCCESSFUL_EMPLOYEE_GET: "GET_EMPLOYEE_UNSUCCESSFUL"
};

export const getAllEmployees = () => async (dispatch: any) => {
  getEmployees()
    .then(res => {
      console.log("response found");
      if (res.status === 200) {
        dispatch({
          type: employeeTypes.SUCCESSFUL_EMPLOYEE_GET,
          payload: {
            employee: res.data
          }
        });
      } else {
        dispatch({
          type: employeeTypes.UNSUCCESSFUL_EMPLOYEE_GET,
          payload: {
            employeeMessage: "Failed to get employee"
          }
        });
      }
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: employeeTypes.UNSUCCESSFUL_EMPLOYEE_GET,
        payload: {
          employeeMessage: "Failed to get employee"
        }
      });
    });
};
