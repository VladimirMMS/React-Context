import React, { useContext } from 'react';
import {useEffect} from 'react';
import UserContext from '../context/User/UserContext';


function UserList() {

    const {getUsers, users, getProfile} = useContext(UserContext)
    useEffect(() => {
        getUsers()
        
    
    }, [])

    return (
        <div className = "list-group h-100">
            {
                users.map(user => (
                    <a  className = "list-group-item list-group d-flex flew-row justify-content-start " key= {user.id} href = "#!" onClick = {() => getProfile(user.id)}>{`${user.first_name} ${user.last_name}`}
                    <img src = {user.avatar} alt = {user.first_name} className = "img-fluid mr-4 rounded-circle" width ="70"/>

                    <p></p>

                    
                    </a>
                ))
            }
        </div>
    );
}

export default UserList;