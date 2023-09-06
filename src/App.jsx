import './App.css';

import { Route, Routes } from 'react-router-dom';
import ProfilePage from './Components/Profile/ProfilePage';
import Navbar from './Components/Navbar';
import Feed from './Components/Deck/Feed';
import NewPost from './Components/NewPost';

const posts = [
  {
    username: 'ibxcodecat',
    isVerified: true,
    content: 'I love cats!',
    timestamp: '10m'
  },
  {
    username: 'kittykat',
    isVerified: false,
    content: 'I am a kitty',
    timestamp: '10m'
  },
  {
    username: 'egg',
    isVerified: false,
    content: 'I am an egg',
    timestamp: '10m'
  }
]

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed posts={posts} />} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        <NewPost />
    </div>
  );
}

export default App;
