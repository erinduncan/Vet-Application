import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../utilites/Wrapper";
import { Card } from "@material-ui/core";
import { sortEmployee } from "../../utilites/search-functions/sortEmployee";
import { filterEmployee } from "../../utilites/search-functions/filterEmployee";

interface IEmployeeProps {
  employees: any;
  employeesMessage: string;
  id: number;
  getAllEmployees: () => void;
  updateId: (id: number) => void;
}

export class EmployeeComponent extends React.Component<IEmployeeProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      role: "",
      searchTerm: "",
      sortType: "ascending"
    };
  }

  componentDidMount = () => {
    if (this.props.employees === null) {
      this.props.getAllEmployees();
    }
  };

  onSearchChange = (e: any) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value
    });
  };

  sortChanger = (e: any) => {
    this.setState({
      ...this.state,
      sortType: e.target.value
    });
  };

  subHeader = () => {
    return (
      <>
        Employee Filter: &nbsp;
        <input
          type="text"
          placeholder="Enter employee's name or employee's role"
          onChange={this.onSearchChange}
        />
        &nbsp; Sort:
        <select onChange={this.sortChanger}>
          <option value="ascending" selected>
            ascending
          </option>
          <option value="descending">descending</option>
        </select>
      </>
    );
  };

  mapEmployees = () => {
    if (this.state.searchTerm.length < 1) {
      let employees = this.props.employees.map((employee: any) => employee);
      return sortEmployee(this.state.sortType, employees).map((employee: any) =>
        this.makeTable(employee)
      );
    }
    if (
      filterEmployee(this.props.employees, this.state.searchTerm).length === 0
    ) {
      return "No employee found!";
    }
    let employees = filterEmployee(
      this.props.employees,
      this.state.searchTerm
    ).map((employee: any) => employee);
    return sortEmployee(this.state.sortType, employees).map((employee: any) =>
      this.makeTable(employee)
    );
  };

  makeTable = (employee: any) => {
    return (
      <tr>
        <td>
          <Link to={`/employee/${employee["id"]}`}>
            <span id={employee.id} onClick={this.props.employees.id}>
              {employee.id}
            </span>
          </Link>
        </td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.email}</td>
        <td>{employee.role}</td>
        <td>{employee.phoneNumber}</td>
      </tr>
    );
  };

  render() {
    return (
      <Wrapper title="Employees">
        <Card className="full-card">
          <div className="tblbox">
            <div className="tblhdr">Employees</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Employee Id:</b>
                  </td>
                  <td>
                    <b>First Name:</b>
                  </td>
                  <td>
                    <b>Last Name:</b>
                  </td>
                  <td>
                    <b>Email:</b>
                  </td>
                  <td>
                    <b>Role:</b>
                  </td>
                  <td>
                    <b>Phone Number:</b>
                  </td>
                </tr>
                {this.props.employees ? (
                  this.mapEmployees()
                ) : (
                  <tr>
                    <td>No data available</td>
                    <td>No data available</td>
                    <td>No data available</td>
                    <td>No data available</td>
                    <td>No data available</td>
                    <td>No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </Wrapper>
    );
  }
}

export default EmployeeComponent;
