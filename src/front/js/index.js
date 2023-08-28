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
import AgeVerification from "./pages/AgeVerify.jsx";
import TypingEffect from "./pages/PreEnterPage.jsx";
import Enter from "./pages/Enter.jsx";

//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));
//ReactDOM.render(<TopArtists />, document.querySelector("#app"));
//ReactDOM.render(<ArtistInfo />, document.querySelector("#app"));
//ReactDOM.render(<test />, document.querySelector("#app"));
//ReactDOM.render(<AgeVerification />, document.querySelector("#app"));
//ReactDOM.render(<TypingEffect />, document.querySelector("#app"));
//ReactDOM.render(<Enter />, document.querySelector("#app"));



//this is a quick test just see...