import './App.css';
import Profile from './components/Profile'
import UserList from './components/UserList';
import UserState from './context/User/UserState';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <UserState>
      <Profile/>
      <UserList/>
    </UserState>
    
  );
}

export default App;
