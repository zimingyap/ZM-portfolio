import "./App.css";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
    return (
        <Authenticator>
          {({ signOut, user }) => (
            <div className="App">
              <p>
                Hey {user.username}, welcome to my channel, with auth!
              </p>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      );
}

export default App;
