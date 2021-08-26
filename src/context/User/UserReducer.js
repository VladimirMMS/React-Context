import { GET_USERS, GET_PROFILE } from "../Type";

export default function (state, action) {
    const {payload, type} = action

    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users:payload
            }
            
        case GET_PROFILE:
            return {
                ...state,
                selecedUser:payload
            }
    
        default:
            return state;
    }
    
}