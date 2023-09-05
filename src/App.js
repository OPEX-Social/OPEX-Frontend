import logo from './logo.svg';
import './App.css';

import Post from './Components/Post';
import UserProfile from './Components/UserProfile';
import Button from './Components/Button';
import Deck from './Components/Deck';

function App() {
  return (
    <div className="App">

      <Button label="Click me!" onClick={() => alert("Hello, world!")} />

      <Deck posts={[
        {
          username: "ibxcodecat",
          isVerified: true,
          content: "I love cats!",
          timestamp: "4:49 PM - 3 August 2023",
        },
        {
          username: "ibxcodedog",
          isVerified: false,
          content: "I love dogs!",
          timestamp: "4:49 PM - 3 August 2023",
        },
        {
          username: "ibxcodebird",
          isVerified: true,
          content: "I love birds!",
          timestamp: "4:49 PM - 3 August 2023",
        }
      ]} />


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
