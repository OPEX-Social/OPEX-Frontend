import logo from './logo.svg';
import './App.css';

import Post from './Components/Post';

function App() {
  return (
    <div className="App">
        <Post username="catperson" content="I love cats!" timestamp="10:00 AM - 1 Jan 1970" />
    </div>
  );
}

export default App;
