import React, {useContext} from 'react';
import UserContext from '../context/User/UserContext';


function Profile() {
    const {selecedUser} = useContext(UserContext)
    return (
        <>
        {selecedUser && (
            <h1>{selecedUser.first_name}</h1>
        )}
        
            
        </>
    );
}

export default Profile;