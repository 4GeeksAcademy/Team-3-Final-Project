import React, { useEffect } from "react";

const CLIENT_ID = "7631a1e4f85447c9aac2d3fa92ecb289";
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN =
  "https://3000-4geeksacade-team3finalp-j47q58tkbwz.ws-us104.gitpod.io/LandingPage";
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-top-read"];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);


/* https://3000-4geeksacade-team3finalp-j47q58tkbwz.ws-us104.gitpod.io/LandingPage#access_token=BQCYf2OX48nIGXDCTit9BGJa-_DAJuDp77Z98ZQQeRVJfCzoebClgjIK4Vr4N7xadFY0QcwsvKQ-QBOfTiYhE46JuP438tUamC2ABbqwiT3ZpBmqRqijNmwg5W5GKuUFvu9lLUhzvImGqMzggOwShHAxeeZLcHct8gqBPoi2gVwvSwfRWd7TXrM&token_type=Bearer&expires_in=3600*/


const getReturnedParamsFromSpotifyAuth= (hash) => {
    const stringAfterHashtag = hash.substring(1);
    const paramsInUrl = stringAfterHashtag.split("&");
    const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
        console.log(currentValue);
        const [key, value] = currentValue.split("=");
        accumulater[key] = value;
        return accumulater;
    
    }, {});

    return paramsSplitUp;
};

const WebApp = () => { 
    useEffect(() => {
        if(window.location.hash) {
            const object = getReturnedParamsFromSpotifyAuth(window.location.hash);
            console.log({ object });
        }
      }, []);
  const handleLogin = () => {
    window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
  };
  return (
    <div className="container">
      <h1>hello</h1>
      <button onClick={handleLogin}>Access</button>
    </div>
  );
};

export default WebApp;
