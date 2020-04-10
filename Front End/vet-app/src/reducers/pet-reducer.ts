import { IPetState } from "../utilites";
import { petTypes } from "../action-mappers/pet-action";


const initialState: IPetState = {
    pets: null,
    pet: null,
    petMessage: '',
    id: 0
}

export const petReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case petTypes.SUCCESSFUL_PET_GET: {
            return {
                ...state,
                pets: action.payload.pet,
                petMessage: "Success getting pets"   
            }
        }
        case petTypes.UNSUCCESSFUL_PET_GET: {
            return {
                ...state,
                petMessage: action.payload.petMessage
            }
        }
        default:
            return state;
    }
}