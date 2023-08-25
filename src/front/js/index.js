//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


//include your index.scss file into the bundle
import "../styles/index.css";


//import your own components
import Layout from "./layout";
import Enter from "./pages/Enter.jsx";
import TopArtists from "./pages/TopArtists.jsx";
import ArtistInfo from "./pages/ArtistInfo";

//render your react application
//ReactDOM.render(<Layout />, document.querySelector("#app"));
//ReactDOM.render(<Enter />, document.querySelector("#app"));
//ReactDOM.render(<TopArtists />, document.querySelector("#app"));
ReactDOM.render(<ArtistInfo />, document.querySelector("#app"));
