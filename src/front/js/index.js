//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import Layout from "./layout";
import Enter from "./pages/Enter.jsx";

//render your react application
//ReactDOM.render(<Layout />, document.querySelector("#app"));
ReactDOM.render(<Enter />, document.querySelector("#app"));
