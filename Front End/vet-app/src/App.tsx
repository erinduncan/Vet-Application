import React from "react";
import "./VetConnect.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/login-components/LoginContainer";
import HomeComponent from "./components/home-components/HomeContainer";
import NavbarComponent from "./components/NavbarComponent";
import { PetComponent } from "./components/pet-components/PetComponent";
import ClientComponent from "./components/client-components/ClientContainer";
import EmployeeComponent from "./components/employee-components/EmployeeContainer";

class AppComponent extends React.Component<any, any> {
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="mainPage">
          <Router>
          <NavbarComponent />
            <Switch>
              <Route path="/clients" component={ClientComponent} />
              <Route path="/employees" component={EmployeeComponent}/>
              <Route path="/pets" component={PetComponent} />
              <Route path="/" component={HomeComponent} />
            </Switch>
          </Router>
        </div>
      );
    
    } else {
      return (
        <div className="mainPage">
          <Router>
            <Switch>
              <Route path="/" component={LoginComponent} />
            </Switch>
          </Router>
        </div>
      );
    }
  }
}


export default AppComponent;
