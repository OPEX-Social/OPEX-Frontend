import './App.css';

import ProfilePage from './Components/Profile/ProfilePage';
import Navbar from './Components/Navbar';
import Feed from './Components/Deck/Feed';
import NewPost from './Components/NewPost';

import { Routes, Route } from "react-router-dom";

import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import EmailVerification from "supertokens-auth-react/recipe/emailverification";

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";
import { EmailVerificationPreBuiltUI } from "supertokens-auth-react/recipe/emailverification/prebuiltui";

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
    appName: "OPEX",
    apiDomain: "http://localhost:8081",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth"
  },
  recipeList: [
    EmailPassword.init(),
    EmailVerification.init({
      mode: "REQUIRED", //Or "OPTIONAL"
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
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [EmailPasswordPreBuiltUI, EmailVerificationPreBuiltUI])}

        <Route path="/" element={<Feed posts={posts} />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <NewPost />
    </div>
  );
}

export default App;
