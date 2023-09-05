import logo from './logo.svg';
import './App.css';

import Post from './Components/Post';
import UserProfile from './Components/UserProfile';
import Button from './Components/Button';
import Deck from './Components/Posts';
import Profile from './Components/Profile';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
  return (
    <div className="App">

<LoginButton/>

<LogoutButton/>


      <UserProfile user={{
        username: "ibxcodecat",
        bio: "I love cats!",
        followers: 100,
        following: 100,
        profilePicture: "https://avatars.githubusercontent.com/u/47279783?v=4",
        isVerified: true
      }} />

    </div>
  );
}

export default App;
