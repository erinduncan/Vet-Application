import { connect } from "react-redux";
import { IState } from "../../utilites/index";
import { EmployeeComponent } from "./EmployeeComponent";
import { getAllEmployees } from "../../action-mappers/employee-action";


const mapStateToProps = (state: IState) => {
  return {
    employees: state.employeeState.employees,
    employeeMessage: state.employeeState.employeeMessage,
    id: state.employeeState.id
  };
};

const mapDispatchToProps = {
  getAllEmployees
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent);