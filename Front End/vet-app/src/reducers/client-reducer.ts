import { IClientState } from "../utilites";
import { clientTypes } from "../action-mappers/client-action";


const initialState: IClientState = {
    clients: null,
    client: null,
    clientMessage: '',
    id: 0
}

export const clientReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case clientTypes.SUCCESSFUL_CLIENT_GET: {
            return {
                ...state,
                clients: action.payload.client,
                clientMessage: "Success getting clients"   
            }
        }
        case clientTypes.UNSUCCESSFUL_CLIENT_GET: {
            return {
                ...state,
                clientMessage: action.payload.clientMessage
            }
        }
        default:
            return state;
    }
}