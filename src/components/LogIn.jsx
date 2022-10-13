import React from 'react'

const LogIn = () => {

  const logIn = (e) => {
    e.preventDefault();
    fetch("http://206.189.91.54/api/v1/auth/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": e.target.signInEmail.value,
        "password": e.target.signInPassword.value,
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
      <form onSubmit={logIn}>
        <input name="signInEmail" type="email" placeholder="Email"/><br/>
        <input name="signInPassword" type="password" placeholder="Password"/><br/>
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default LogIn
