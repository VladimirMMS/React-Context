import React, {useReducer} from 'react';
import  UserReducer  from './UserReducer';
import UserContext from './UserContext';



function UserState({...chilren}) {
    const initialState = {
        users: [],
        selecedUser:null
    }

    const [state, dispath] = useReducer(userReducer, initialState)
    
    const getUsers = () => {}
    
    const getProfile = () => {}

    return (
        <UserContext.Provider>
            {chilren}
        </UserContext.Provider>
        
    )
}

export default UserState;