import { connect } from "react-redux";
import { IState } from "../../utilites/index";
import { PetComponent } from "./PetComponent";
import { getAllPets } from "../../action-mappers/pet-action"

const mapStateToProps = (state: IState) => {
  return {
    pets: state.petState.pets,
    petMessage: state.petState.petMessage,
    id: state.petState.id,
  };
};

const mapDispatchToProps = {
  getAllPets
};

export default connect(mapStateToProps, mapDispatchToProps)(PetComponent);
