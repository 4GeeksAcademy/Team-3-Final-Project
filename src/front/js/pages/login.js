import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

// import TopArtists from "./TopArtists.jsx";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");

  const handleClick = () => {
	const opts = {
		method: 'POST',
		body: JSON.stringify({
			email: email,
			password: password
		})
	}

	fetch('https://3000-4geeksacade-team3finalp-axhahloailw.ws-us104.gitpod.io/api/token', opts)
		.then(resp => {
			if(resp.status === 200) return resp.json();
			else alert("There was an error!");
		})
		.then()
		.catch(error => {
			console.error("There was an error!", error);
		})
  }


  return (
    <div className="text-center mt-5">
      <h1>login</h1>
      <div>
        <input type="text" placeholder="email" value ={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="password" value ={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};