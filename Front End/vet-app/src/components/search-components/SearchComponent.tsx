import React from 'react';
import { Link } from 'react-router-dom';
import { allData } from '../../utilites/api'
import { filterAll } from '../../utilites/search-functions/filterAll';

export class SearchComponent extends React.Component<any, any> {
  resources: any;
  constructor(props: any) {
    super(props);
    this.state = {
      resData: "",
      filtering: false
    };
  }

  async componentDidMount() {
    this.resources = await this.gatherData();
  }
  gatherData = async () => {
    let apiData = await allData();
    return apiData;
  };

  onSearchChange = (e: any) => {
    if (e.target.value.length > 0) {
      this.setState({
        ...this.state,
        resData: filterAll(this.resources, e.target.value),
        filtering: true
      });
    } else if (e.target.value.length === 0) {
      this.setState({
        ...this.state,
        resData: "",
        filtering: false
      });
    }
  };

  showResource = (resource: any) => {
    if (resource["name"] === undefined) {
      return (
        <div
          className="res"
          key={`${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}
        >
          <Link
            to={`/employee/${resource["firstName"]}${resource["lastName"]}${resource["id"]}`}
          >
            {" "}
            {resource["firstName"]} {resource["lastName"]}
          </Link>
        </div>
      );
    } else if (
      resource["pets"] === undefined &&
      resource["name"] === undefined
    ) {
      return (
        <div className="res" key={`${resource["id"]}${resource["id"]}`}>
          <Link to={`/client/${resource["lasName"]}`}>{resource["lastName"]}</Link>
        </div>
      );
    }
  };

  render() {
    return (
      <span className="mainsearch">
        <b>Search: </b>
        <input
          onChange={this.onSearchChange}
          placeholder="Search"
          id="search-box"
          type="text"
        />
        {this.state.resData.length > 0 ? (
          this.state.resData.map((resource: any) => {
            return this.showResource(resource);
          })
        ) : this.state.filtering === true ? (
          <div className="res">
            No resource found!
          </div>
        ) : (
          <></>
        )}
      </span>
    );
  }
}
