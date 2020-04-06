import React from "react";
import Wrapper from "../../utilites/Wrapper";

export class HomeComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentUser: "",
      pet: "",
      update: false
    };
  }

  propsUpdated: boolean = false;

  componentDidMount() {
    this.props.getAllEmployees();
    console.log(this.props.currentUser);
  }

  componentDidUpdate() {
    if (this.props.clients && this.propsUpdated === false) {
      if (this.props.currentUser.employeeRole === "MANAGER") {
        this.setState({
          ...this.state,
          currentUser: this.props.clients
        });
      } else {
        this.setState({
          ...this.state,
          currentUser: this.props.clients[0]
        });
      }
      this.propsUpdated = true;
    }
    console.log(this.state.currentUser);
  }

  mapData = () => {
    if (this.state.currentUser !== null) {
      if (this.props.currentUser.employeeRole === "MANAGER") {
        return this.state.currentUser.map((client: any) => {
          return this.managerTable(client);
        });
      } else {
        return (
          <tr>
            <td>
              <span className="TBD">{this.state.currentUser.firstName}</span>
            </td>
            <td>
              {this.state.currentUser.vet.firstName}{" "}
              {this.state.currentUser.vet.lastName}
            </td>
            <td>{this.state.currentUser.pets.length}</td>
          </tr>
        );
      }
    }
  };

  managerTable = (client: any) => {
    console.log(client.name);
    return (
      <tr>
        <td>
          <span className="TBD">{client.name}</span>
        </td>
        <td>
          {client.vet.firstName} {client.vet.lastName}
        </td>
        <td>{client.pets.length}</td>
      </tr>
    );
  };

  render() {
    return (
      <Wrapper
        title={
          this.state.currentUser
            ? "Welcome, " +
              this.props.currentUser.firstName +
              " " +
              this.props.currentUser.lastName
            : " "
        }
      >
        <div className="full-card">
          <div className="tblbox">
            <div className="tblhdr">
              {this.state.currentUser
                ? this.props.currentUser.firstName + "'s resources"
                : " "}
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Client Name:</b>
                  </td>
                  <td>
                    <b>Veterinarian:</b>
                  </td>
                  <td>
                    <b>Number of Pets:</b>
                  </td>
                </tr>
                {this.state.currentUser ? (
                  this.mapData()
                ) : (
                  <tr>
                    <td>No data available</td>
                    <td>No data available</td>
                    <td>No data available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    );
  }
}
