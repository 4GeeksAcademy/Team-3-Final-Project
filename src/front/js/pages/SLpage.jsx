import React from 'react';
import '../../styles/SLPage.css'; // Make sure to adjust the path to your CSS file

const AuthForm = () => {
  return (
    <div className="auth-container">
      <div className="form-container">
        <h2 className='log-in'>Log-In</h2>
        <form>
          <label htmlFor="email"></label>
          <input type="email" id="email" placeholder="Email" />
          <label htmlFor="password"></label>
          <input type="password" id="password" placeholder="Password" />

          
          <div className="buttons">
            <button type="submit">Log In</button>
          </div>

          <h2 className='sepreator'></h2>

          <form>
          <h2 className='sign-up'>Sign-up</h2>
          <label htmlFor="username"></label>
          <input type="text" id="username" placeholder="Username" />
          <label htmlFor="name"></label>
          <input type="text" id="name" placeholder="Name" />
          <label htmlFor="lastName"></label>
          <input type="text" id="lastName" placeholder="Last Name" />
          <label htmlFor="email2"></label>
          <input type="email" id="email2" placeholder="Email" />
          <label htmlFor="password2"></label>
          <input type="password" id="password2" placeholder="Password" />
          <div className="buttons">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        </form>
      </div>
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

export default AuthForm;
