import React from "react";
import Wrapper from "../../utilites/Wrapper";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { sortClient } from "../../utilites/search-functions/sortClient";
import { filterClient } from "../../utilites/search-functions/filterClient";

interface IClientProps {
  clients: any;
  clientsMessage: string;
  id: number;
  getAllClients: () => void;
}

export class ClientComponent extends React.Component<IClientProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      sortType: "ascending",
    };
  }

  componentDidMount = () => {
    if (this.props.clients === null) {
      this.props.getAllClients();
    }
  };

  onSearchChange = (e: any) => {
    this.setState({
      ...this.state,
      searchTerm: e.target.value,
    });
  };

  sortChanger = (e: any) => {
    this.setState({
      ...this.state,
      sortType: e.target.value,
    });
  };

  searchBar = () => {
    return (
      <>
        Client Filter: &nbsp;
        <input
          type="text"
          placeholder="Enter client's name"
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

  mapClients = () => {
    if (this.state.searchTerm.length < 1) {
      let clients = this.props.clients.map((client: any) => client);
      return sortClient(this.state.sortType, clients).map((client: any) =>
        this.makeTable(client)
      );
    }

    if (filterClient(this.props.clients, this.state.searchTerm).length === 0) {
      return "No client found!";
    }

    let clients = filterClient(this.props.clients, this.state.searchTerm).map(
      (client: any) => client
    );

    return sortClient(this.state.sortType, clients).map((client: any) =>
      this.makeTable(client)
    );
  };

  count = 0;

  makeTable = (client: any) => {
    return (
      <tr key={this.count++}>
        <td>
          <Link to={`/client/${client["id"]}`}>
            <span id={client.id} onClick={this.props.clients.id}>
              {client.id}
            </span>
          </Link>
        </td>
        <td>{client.firstName}</td>
        <td>{client.lastName}</td>
        <td>{client.email}</td>
        <td>{client.phoneNumber}</td>
      </tr>
    );
  };

  render() {
    return (
      <Wrapper title="Clients" elements={this.searchBar()}>
        <Card className="full-card">
          <div className="tblbox">
            <div className="tblhdr">Clients</div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Client Id:</b>
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
                    <b>Phone Number:</b>
                  </td>
                </tr>
                {this.props.clients ? (
                  this.mapClients()
                ) : (
                  <tr>
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

export default ClientComponent;
