import logo from './logo.svg';
import './App.css';

import Post from './Components/Post';
import UserProfile from './Components/UserProfile';
import Button from './Components/Button';
import Deck from './Components/Posts';
import Profile from './Components/Profile';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

<Navbar/>
<LoginButton/>

<LogoutButton/>

    </div>
  );
}

export default App;
