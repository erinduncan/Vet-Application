import React from "react";
import Wrapper from "../../utilites/Wrapper";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import { sortPet } from "../../utilites/search-functions/sortPet";
import { filterPet } from "../../utilites/search-functions/filterPet";

interface IPetProps {
  pets: any;
  petsMessage: string;
  id: number;
  getAllPets: () => void;
}

export class PetComponent extends React.Component<IPetProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      searchTerm: "",
      sortType: "ascending",
    };
  }

  componentDidMount = () => {
    if (this.props.pets === null) {
      this.props.getAllPets();
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
        Pet Filter: &nbsp;
        <input
          type="text"
          placeholder="Type pet's name"
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

  mapPets = () => {
    if (this.state.searchTerm.length < 1) {
      let pets = this.props.pets.map((pet: any) => pet);
      return sortPet(this.state.sortType, pets).map((pet: any) =>
        this.makeTable(pet)
      );
    }

    if (filterPet(this.props.pets, this.state.searchTerm).length === 0) {
      return "No pet found.";
    }

    let pets = filterPet(this.props.pets, this.state.searchTerm).map(
      (pet: any) => pet
    );

    return sortPet(this.state.sortType, pets).map((pet: any) =>
      this.makeTable(pet)
    );
  };

  count = 0;

  makeTable = (pet: any) => {
    return (
      <tr key={this.count++}>
        <td>
          <Link to={`/pet/${pet["id"]}`}>
            <span id={pet.id} onClick={this.props.pets.id}>
              {pet.id}
            </span>
          </Link>
        </td>
        <td>{pet.species}</td>
        <td>{pet.name}</td>
        <td>{pet.age}</td>
        <td>
          <Link to={`/client/${["id"]}`}>{pet.owner.id}</Link>
        </td>
      </tr>
    );
  };

  render() {
    return (
      <>
        <Wrapper title="Pets" elements={this.searchBar()}>
          <Card className="full-card">
            <div className="tblbox">
              <div className="tblhdr">Pets</div>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <b>Pet Id:</b>
                    </td>
                    <td>
                      <b>Species:</b>
                    </td>
                    <td>
                      <b>Pet Name:</b>
                    </td>
                    <td>
                      <b>Pet Age:</b>
                    </td>
                    <td>
                      <b>Owner:</b>
                    </td>
                  </tr>
                  {this.props.pets ? (
                    this.mapPets()
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
      </>
    );
  }
}

export default PetComponent;
