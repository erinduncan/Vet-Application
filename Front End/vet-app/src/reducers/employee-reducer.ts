import { IEmployeeState } from "../utilites";
import { employeeTypes } from "../action-mappers/employee-action";


const initialState: IEmployeeState = {
    employees: null,
    employee: null,
    employeeMessage: '',
    id: 0
}

export const employeeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case employeeTypes.SUCCESSFUL_EMPLOYEE_GET: {
            return {
                ...state,
                employees: action.payload.employee,
                employeeMessage: "Success getting employees"   
            }
        }
        case employeeTypes.UNSUCCESSFUL_EMPLOYEE_GET: {
            return {
                ...state,
                employeeMessage: action.payload.employeeMessage
            }
        }
        default:
            return state;
    }
}