import React from 'react'

const SignUp = () => {

  const addAccount = (e) => {
    e.preventDefault();
    fetch("http://206.189.91.54/api/v1/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": e.target.signUpEmail.value,
        "password": e.target.signUpPassword.value,
        "password_confirmation": e.target.pConfirmation.value
      })
    }).then(res => {
      return res.json()
    })
    .then(data => success(data))
    .catch(error => console.log("error"))
  }

  const success = (data) => {
    console.log(data)
    //change state to sign in
  }
  
  return (
    <div>
      <form onSubmit={addAccount}>
        <input name="signUpEmail" type="email" placeholder="Email"/><br/>
        <input name="signUpPassword" type="password" placeholder="Password"/><br/>
        <input name="pConfirmation" type="password" placeholder="Confirm Password"/><br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp
