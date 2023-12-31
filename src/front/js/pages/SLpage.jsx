import React, { useState } from "react";
import "../../styles/SLPage.css"; // Make sure to adjust the path to your CSS file
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [generateRandom, setGenerateRandom] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [firstName, setFirstName] = useState(""); // Add this
  const [lastName, setLastName] = useState(""); // Add this
  const [email, setEmail] = useState(""); // Add this

  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const handleSignupSubmit = async (event) => {
    event.preventDefault();

    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email2.value;
    const username = event.target.username.value;
    const password = event.target.password2.value;

    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, username, password }),
    });

    if (response.ok) {
      setSignUpSuccess(true);
      console.log("Sign-up successful");
    } else {
      // Handle sign-up error
      console.error("Sign-up failed");
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const handleRandomGenerate = () => {
    setGenerateRandom(!generateRandom);
    if (generateRandom) {
      setUsername("");
      setPassword("");
    }
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRandomGenerateClick = () => {
    const randomUsername = generateRandom ? generateRandomUsername() : "";
    const randomPassword = generateRandom ? generateRandomString(12) : "";
    setUsername(randomUsername);
    setPassword(randomPassword);
  };

  const generateRandomUsername = () => {
    const adjectives = [
      "apple",
      "blue",
      "green",
      "orange",
      "purple",
      "red",
      "yellow",
    ];
    const nouns = ["man", "bird", "cat", "dog", "elephant", "fish", "lion"];
    const randomAdjective =
      adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 100);
    return `${randomAdjective}${randomNoun}${randomNumber}`;
  };

  const generateRandomString = (length) => {
    const characters =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        {isLogin ? (
          <>
            <h2 className="log-in">Log-In</h2>
            <form>
              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Email" />
              <label htmlFor="password"></label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
              />
              <div className="buttons">
            
                  <Link to="/LandingPage">
                      <button>Log In</button>
                  </Link>

              
              </div>
            </form>
            <p className="small-text">
              Don't have an account?{" "}
              <span className="sig" onClick={toggleForm}>
                Sign Up
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="sign-up">Sign-up</h2>
            <form>
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                disabled={generateRandom}
              />
              <label htmlFor="firstName"></label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={generateRandom}
              />
              <label htmlFor="lastName"></label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={generateRandom}
              />
              <label htmlFor="email2"></label>
              <input
                type="email"
                id="email2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={generateRandom}
              />
              <label htmlFor="password2"></label>
              <input
                type={showPassword ? "text" : "password"}
                id="password2"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                disabled={generateRandom}
              />
              <div className="random-generate">
                <input
                  type="checkbox"
                  id="random-generate"
                  checked={generateRandom}
                  onChange={handleRandomGenerate}
                />
                <label htmlFor="random-generate">
                  Generate Random Username/Password
                </label>
                <button
                  type="button"
                  onClick={handleRandomGenerateClick}
                  disabled={!generateRandom}
                >
                  Generate
                </button>
                {!generateRandom && (
                  <label>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() =>
                        setShowPassword((prevShowPassword) => !prevShowPassword)
                      }
                    />
                    Show Password
                  </label>
                )}
              </div>
              <div className="buttons">
                <Link to="/LandingPage">
                  <button type="submit">submit</button>
                </Link>

                {signUpSuccess && (
                  <p>Sign-up successful! You can now log in.</p>
                )}
              </div>
            </form>
            <p className="small-text">
              Already have an account?{" "}
              <span className="sig" onClick={toggleForm}>
                Log In
              </span>
            </p>
          </>
        )}
      </div>
      <div className="form-container">
        <h2>Welcome</h2>
        <h2>To hypnos</h2>
        <h2>
          We <span className="red-text">love</span> music.
        </h2>
        <h2>all day.</h2>
        <h2>every day.</h2>
      </div>
    </div>
  );
};

export default AuthForm;
