import React from "react";

const SignIn = ({ successSignIn }) => {

  const signIn = async (e) => {
    e.preventDefault();
    let errors;
    let data;

    try {
      // Fetch Avion API
      const res = await fetch("http://206.189.91.54/api/v1/auth/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.signInEmail.value,
          password: e.target.signInPassword.value,
        }),
      });

      // Redefine header into object
      const body = await res.json();
      const headers = [...res.headers.entries()].reduce((acc, val) => {
        acc[val[0]] = val[1];
        return acc;
      }, {});

      data = { body, headers };

      // Console.log error if success = false
      if (data.body.success === false){
        console.log("status:", data.body.success);
      // Redirect to dashboard if success = true
      } else {success(data)}

      // Add data to Local Storage
      localStorage.setItem("loginCredentials", JSON.stringify(data));

      // Show error if fetch is unsuccessful
    } catch (error) {
      errors = error.errors;
      console.log(errors);
    }
  };

  // Redirect to Dashboard
  const success = (data) => {
    console.log(data);
    successSignIn();
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={signIn}>
        <input name="signInEmail" type="email" placeholder="Email" />
        <br />
        <input name="signInPassword" type="password" placeholder="Password" />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
