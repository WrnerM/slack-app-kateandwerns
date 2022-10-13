import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'

const Authentication = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleAuth = () => {
    setShowSignUp(current => !current);
    setShowSignIn(current => !current);
  }

  return (
    <div>
      <button onClick={toggleAuth}>Toggle</button>
      <h2>Sign Up</h2>
      <SignUp />
      <h2>Log In</h2>
      <LogIn />
    </div>
  )
}

export default Authentication
