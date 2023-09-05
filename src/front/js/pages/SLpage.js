import React, {useContext, useState } from "react";
import { Context } from "../store/appContext";
import {useNavigate} from "react-router-dom";
import "../../styles/SLPage.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";

export  const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const history = useHistory(); 
  
  const token = sessionStorage.getItem("token");
  console.log("This is a token", store.token);
  const handleClick =() => {
      actions.login(email, password);
      }; 

  if (store.token && store.token != "" && store.token != undefined) navigate("/"); 
  // history.push("/");

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
           <div className="form-container">
        <h2>Welcome</h2>
        <h2>To hypnos</h2>
        <h2>We <span className='red-text'>love</span> music.</h2>
        <h2>all day.</h2>
        <h2>every day.</h2>

        

        
        
      </div>
      </div>
  
  );
          };