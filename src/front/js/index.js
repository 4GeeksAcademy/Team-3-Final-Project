//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//include your index.scss file into the bundle
import "../styles/index.css";


//import your own components
import Layout from "./layout";
import TopArtists from "./pages/TopArtists.jsx";
import ArtistInfo from "./pages/ArtistInfo";
import Enter from "./pages/Enter.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/SLpage.jsx";


//render your react application
//ReactDOM.render(<Layout />, document.querySelector("#app"));
//ReactDOM.render(<TopArtists />, document.querySelector("#app"));
//ReactDOM.render(<ArtistInfo />, document.querySelector("#app"));
//ReactDOM.render(<test />, document.querySelector("#app"));
//ReactDOM.render(<AuthPage />, document.querySelector("#app"));
//ReactDOM.render(<Enter />, document.querySelector("#app"));
ReactDOM.render(<LandingPage />, document.querySelector("#app"));



//this is a quick test just see...