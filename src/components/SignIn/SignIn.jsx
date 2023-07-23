import React from 'react'
import './SignIn.scss';
const SignIn = () => {
  return (
    <div className="signIn">
      <div className="left">
        <h1>Board.</h1>
      </div>
      <div className="right">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="google">
          <img src="./Google_logo.png" alt="" />
          <p>Sign in with Google</p>
        </div>
        <div className="apple">
          <img src="" alt="" />
          <p>Sign in with Apple</p>
        </div>
        <div className="sign_inForm">

        </div>
      </div>
    </div>
  )
}

export default SignIn
