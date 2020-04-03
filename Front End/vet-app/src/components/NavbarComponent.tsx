import React from "react";
import { Link } from "react-router-dom";
import { SearchComponent } from "./search-components/SearchComponent";

export const logout = () => {
  window.location.replace("http://localhost:3000/");
};

export default function NavbarComponent() {
  return (
    <>
      <div className="navbar">
        <h3>VetConnect</h3>
        <Link
          onClick={logout}
          style={{ float: "right", paddingTop: "45px", paddingRight: "30px" }}
          to=""
        >
          Logout
        </Link>
        <SearchComponent />
      </div>
      <div className="side-nav">
        <Link to="/pets">
          <a>
            <div className="navitem">Pets</div>
          </a>
        </Link>
        <Link to="/clients">
          <a>
            <div className="navitem">Clients</div>
          </a>
        </Link>
        <Link to="/employees">
          <a>
            <div className="navitem">Employees</div>
          </a>
        </Link>
      </div>
    </>
  );
}
