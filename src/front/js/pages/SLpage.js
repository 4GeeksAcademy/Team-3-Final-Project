import React, {useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/SLPage.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";

export  const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick =() => {

    const opts = {
      method: 'POST',
      body: JSON.stringify({
          "email": "email",
          "password": "password"

      })
    }

    fetch ("https://3001-4geeksacade-team3finalp-pc2dhrgzn4h.ws-us104.gitpod.io/api/token", opts)
      .then( resp => {
        if(resp.status === 200) return resp.jason();
        else alert("There has been sone error");
      })
      .then()
      .catch(error => {
        console.error("There was some error!!!", error);
      })
        

  }

  return (
    <div className="auth-container">
      <h1>Login</h1>
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
          onChange={(e) => setPassword(e.setPassword)}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};
