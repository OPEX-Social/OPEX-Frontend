import './App.css';

import ProfilePage from './Components/Profile/ProfilePage';
import Navbar from './Components/Navbar';
import Feed from './Components/Deck/Feed';
import NewPost from './Components/NewPost';

import SuperTokens from "supertokens-auth-react";
import ThirdPartyEmailPassword, {Github, Google } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { ThirdPartyEmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui";

import { Routes, Route } from "react-router-dom";

import * as reactRouterDom from "react-router-dom";

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

SuperTokens.init({
  appInfo: {
      // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
      appName: "OPEX",
      apiDomain: "http://localhost:8081",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/auth",
      websiteBasePath: "/auth"
  },
  recipeList: [
      ThirdPartyEmailPassword.init({
          signInAndUpFeature: {
              providers: [
                  Github.init(),
                  Google.init(),
              ]
          }
      }),
      Session.init()
  ]
});

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyEmailPasswordPreBuiltUI])}
          
          <Route path="/" element={<Feed posts={posts} />} />
          <Route path="/profile" element={<ProfilePage/>} />
        </Routes>
        <NewPost />
    </div>
  );
}

export default App;
