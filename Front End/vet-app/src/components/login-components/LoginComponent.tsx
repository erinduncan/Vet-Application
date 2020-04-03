import React from "react";
import Card from "@material-ui/core/Card";
import Wrapper from "../../utilites/Wrapper";
import LoginFunction from "../../utilites/LoginFunction";

interface ILoginProps {
  currentUser: any;
  loggedIn: boolean;
  loginMessage: string;
  login: (e: string, p: string) => void;
}

export class LoginComponent extends React.Component<ILoginProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange = (event: any) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  signUserIn = () => {
    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <Wrapper>
        <Card className="full-card" style={{ textAlign: "center" }}>
          <h1>VetConnect</h1>
          <LoginFunction
            email={this.state.email}
            password={this.state.password}
            handleChange={this.handleChange}
            handleLogin={this.signUserIn}
            loginMessage={this.props.loginMessage}
          />
        </Card>
      </Wrapper>
    );
  }
}
