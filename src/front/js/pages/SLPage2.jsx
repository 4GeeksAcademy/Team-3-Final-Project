import React, { useState } from 'react';
import '../../styles/SLpage2.css';

const SLpage2 = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(prevState => !prevState);
  };

  return (
    <div className="auth-form">
      <h2 className='SL'>{isSignUp ? 'Sign Up' : 'Log In'}</h2>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        {isSignUp && <input type="text" placeholder="Full Name" />}
        <button>{isSignUp ? 'Sign Up' : 'Log In'}</button>
      </form>
      <p>
        {isSignUp
          ? "Already have an account? Log In"
          : "Don't have an account? "}
        <span onClick={toggleForm}>{isSignUp ? 'Log In' : 'Sign Up'}</span>
      </p>
    </div>
  );
};

export default SLpage2;
