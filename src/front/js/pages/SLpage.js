import React, {useContext, useState } from "react";
import { Context } from "../store/appContext";
// import { useHistory } from "react-router";
import "../../styles/SLPage.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";

export  const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory(); 
  
  console.log("This is a token", store.token);
  const handleClick =() => {
      actions.login(email, password);
  }; 

  if (store.token && store.token != "" && store.token != undefined) history.push("/");

  return (
      <div className="auth-container">
        <h1>Login</h1>
          {store.token && store.token != "" && store.token != undefined ? (
            "You are logged in with this token" + store.token 
          ) : (
            <div>        
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleClick}>Login</button>
            </div>
          )}
      </div>
  
  );
          };