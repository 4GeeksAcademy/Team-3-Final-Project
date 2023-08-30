import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

// import TopArtists from "./TopArtists.jsx";

export const Login = () => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="text-center mt-5">
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" /> 
        <button>Login</button>
      </div>
    </div>
  );
};
