import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

import TopArtists from "./TopArtists.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        if(store.token && store.token != "" && store.token !=undefined) actions.getMessage();
    }, [store.token]);

	return (
		<div className="auth-container">
			<h1>hello</h1>
            <div className="alert alert-info">(store.message)</div>
			
			
			

		</div>
	);
    useEffect(() => {
        // Check if the access token is present in the URL fragment
        const urlParams = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = urlParams.get("access_token");

        if (accessToken) {
            // Now you can use the access token for API requests
            console.log("Access Token:", accessToken);
            // You can also save it to your app's state/context if needed
            actions.setAccessToken(accessToken); // Replace with your action function
        }
    }, []);

    return (
        <div>
            <h1>Log in with Spotify</h1>
            <a href="https://accounts.spotify.com/authorize?response_type=token&client_id=5aa86719c259487c82565468bbaa1d2e&scope=comma-separated-list-of-scopes&redirect_uri=https://cautious-space-chainsaw-7vpgvqpv4q3pwwq-3001.app.github.dev/">
                <button>Login with Spotify</button>
            </a>
        </div>
    );
};
