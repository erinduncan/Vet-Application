import { connect } from "react-redux";
import { IState } from "../../utilites/index";
import { ClientComponent } from "./ClientComponent";
import { getAllClients } from "../../action-mappers/client-action";


const mapStateToProps = (state: IState) => {
  return {
    clients: state.clientState.clients,
    clientMessage: state.clientState.clientMessage,
    id: state.clientState.id
  };
};

const mapDispatchToProps = {
  getAllClients
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientComponent);
