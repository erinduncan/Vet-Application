import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../utilites/Wrapper";
import { sortPet } from "../../utilites/search-functions/sortPet";
import { filterPet } from "../../utilites/search-functions/filterPet";
import Card from "@material-ui/core/Card";

export class PetComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      sortType: "ascending"
    };
  }

  count = 0;

  async componentDidMount() {
    // this.resources = await this.gatherData();
    // this.id = this.props.match.params.id;
    // this.setClient();
    await this.gatherData;
  }

  //   setClient = () => {
  //     if (this.resources.client) {
  //       this.resources.client.map((client: any) => {
  //         if (client["clientId"] === this.id) {
  //           if (
  //             this.state.client.length === 0 ||
  //             this.state.client.clientId !== this.id
  //           ) {
  //             this.setState({
  //               client: client
  //             });
  //           }
  //         }
  //       });
  //     }
  //   };

  gatherData = async () => {
    if (this.props.clients === null) {
      await this.props.getAllClients();
    }
  };

  //   componentDidUpdate() {
  //       this.id = this.props.match.params.id;
  //       this.setClient();
  //   }

  //   gatherData = async () => {
  //       let apiData = await allData();
  //       return apiData;
  //   }

  mapPets = () => {
    if (this.state.searchTerm.length < 1) {
      let pets = this.state.client.pets.map((pet: any) => pet);
      return sortPet(this.state.sortType, pets).map((pet: any) =>
        this.makeTable(pet)
      );
    }
    if (filterPet(this.state.client, this.state.searchTerm).length === 0) {
      return <h4>No pet found.</h4>;
    }
    let filteredPets = filterPet(this.state.client, this.state.searchTerm).map(
      (pet: any) => pet
    );
    return sortPet(this.state.sortType, filteredPets).map((pet: any) =>
      this.makeTable(pet)
    );
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
        {this.props.clients[0].clientId}
        &nbsp;
        <input
          data-test="search"
          type="text"
          placeholder="Type client name or pet name"
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

  makeTable = (pet: any) => {
    return (
      <tr key={`${pet.name}${this.count++}`}>
        <td>
          <Link to={`/pets/${pet.name}`}>
            <span className="colour-me">{pet.name}</span>
          </Link>
        </td>
        <td>
          
        </td>
        <td>
          
        </td>
      </tr>
    );
  };

  render() {
    return (
      <>
        <Wrapper
          title="Pets"
        >
          <Card className="full-card">
            <div className="tblbox">
              <div className="tblhdr">Pets</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Pet Name:</b>
                    </td>
                    <td>
                      <b>Species:</b>
                    </td>
                    <td>
                      <b>Owner:</b>
                    </td>
                  </tr>
                  {this.state.client ? (
                    this.mapPets()
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
          </Card>
        </Wrapper>
      </>
    );
  }
}
