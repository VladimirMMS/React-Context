import axios from 'axios';

function RequestUsers(api) {
    const res = axios.get(api)
    return res
    
}

export default RequestUsers;