//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

=======
import { AccessTokenProvider } from "./AccessTokenContext.jsx";
>>>>>>> tcm68

//include your index.scss file into the bundle
import "../styles/index.css";


//import your own components
<<<<<<< HEAD
import Layout from "./layout";
import TopArtists from "./pages/TopArtists.jsx";
import ArtistInfo from "./pages/ArtistInfo";
import Enter from "./pages/Enter.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/SLpage.jsx";
import NavBar2 from "./pages/NavBar2.jsx";


//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
//ReactDOM.render(<TopArtists />, document.querySelector("#app"));
//ReactDOM.render(<ArtistInfo />, document.querySelector("#app"));
//ReactDOM.render(<test />, document.querySelector("#app"));
//ReactDOM.render(<AuthPage />, document.querySelector("#app"));
//ReactDOM.render(<Enter />, document.querySelector("#app"));
//ReactDOM.render(<LandingPage />, document.querySelector("#app"));
//ReactDOM.render(<NavBar2 />, document.querySelector("#app"));



//this is a quick test just see...
=======
import App from "./App.jsx";

//render your react application
ReactDOM.render(
    <React.StrictMode>
      <AccessTokenProvider>
        <App />
      </AccessTokenProvider>
    </React.StrictMode>,
    document.querySelector('#app')
  );
>>>>>>> tcm68
