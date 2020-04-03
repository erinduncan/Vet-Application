import { connect } from "react-redux";
import { IState } from "../../utilites/index";
import { HomeComponent } from "./HomeComponent";
import { getAllClients } from "../../action-mappers/client-action"

const mapStateToProps = (state: IState) => {
  return {
    clients: state.clientState.clients,
    clientMessage: state.clientState.clientMessage,
    id: state.clientState.id,
    currentUser: state.userState.currentUser
  };
};

const mapDispatchToProps = {
  getAllClients
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
