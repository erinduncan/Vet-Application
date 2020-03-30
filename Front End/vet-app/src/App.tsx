import React from "react";
import "./VetConnect.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PetTableComponent } from "./components/pet-components/PetTableComponent";
import LoginComponent from "./components/login-components/LoginContainer";
import HomeComponent from "./components/home-components/HomeContainer";
import NavbarComponent from "./components/NavbarComponent";

class AppComponent extends React.Component<any, any> {
  render() {
    if (this.props.loggedIn) {
      return (
        <div className="mainPage">
          <Router>
          <NavbarComponent />
            <Switch>
              <Route path="/pet" component={PetTableComponent} />
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
