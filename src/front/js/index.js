//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { AccessTokenProvider } from "./AccessTokenContext.jsx";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
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
