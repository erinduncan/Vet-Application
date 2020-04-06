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
            <div className="navitem">Pets</div>
        </Link>
        <Link to="/clients">
            <div className="navitem">Clients</div>
        </Link>
        <Link to="/employees">
            <div className="navitem">Employees</div>
        </Link>
      </div>
    </>
  );
}
