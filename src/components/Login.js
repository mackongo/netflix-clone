import React, { useState } from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen';

function Login() {

  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">

      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="images/netflix-logo-1.png"
          alt="" />

        <button
          onClick={() => setSignIn(true)}
          className="loginScreen__button">
          Sign In
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">

          {signIn ? (
            <SignUpScreen />
          ) : (

              <div>
                <h1>Unlimited films, TV programmes and more</h1>
                <h2>Watch anywhere, Cancel at anytime</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                <div className="loginScreen__input">
                  <form action="">
                    <input type="email" placeholder="Email Address" />
                    <button className="loginScreen__getStarted">GET STARTED</button>
                  </form>
                </div>
              </div>

            )}

        </div>

      </div>
    </div>
  );
}

export default Login
