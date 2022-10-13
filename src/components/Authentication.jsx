import React from 'react'
import { useState } from 'react'
import SignUp from './SignUp'
import SignIn from './SignIn'

const Authentication = ({successSignIn}) => {

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);

  const toggleSignIn = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  }

  const toggleSignUp = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  }

  return (
    <div>
      <button onClick={toggleSignIn}>Sign In</button>
      <button onClick={toggleSignUp}>Sign Up</button>
      {showSignUp && <SignUp toggleSignIn={toggleSignIn}/>}
      {showSignIn && <SignIn successSignIn={successSignIn}/>}
    </div>
  )
}

export default Authentication
