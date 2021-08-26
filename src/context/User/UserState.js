import React, {useReducer} from 'react';
import  UserReducer  from './UserReducer';
import UserContext from './UserContext';
import RequestUsers from '../../hooks/request';


function UserState({children}) {

    
    const initialState = {
        users: [],
        selecedUser:null
    }

    const url = `https://reqres.in/api/users`

    const [state, dispath] = useReducer(UserReducer, initialState)
    
    const getUsers = async() => {
        const res = await RequestUsers(url)
        dispath({
            type:'GET_USERS',
            payload: res.data.data
        })
      
    }
    
    const getProfile = (id) => {
        const res = RequestUsers(url+'/'+id)
        dispath({
            type: 'GET_PROFILE',
            payload:res?.data.data

        })
    }

    return (
        <UserContext.Provider value = {{
            users: state.users,
            selecedUser: state.selecedUser,
            getUsers,
            getProfile,
            state
        }}>
            {children}
        </UserContext.Provider>   
    )
}

export default UserState;