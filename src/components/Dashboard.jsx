import React from "react";
import Messaging from "./Messaging";

const Dashboard = () => {

  // Get headers of logged in user
  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;
  console.log(headers)

  // Get list of ALL USERS
  const getUsers = async (e) => {
    e.preventDefault();
    try{
      // Fetch Avion API
      const res = await fetch("http://206.189.91.54/api/v1/users",{
        method: "GET",
        headers: headers
      })
        .then((res) => res.json())

        // Show data if fetch is successful
        .then((data) => {
          console.log(data)
        })

      // Show error if fetch is unsuccessful
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div>
        <h2>Channels</h2>
        <p>Create new channel</p>
      </div>
        <Messaging />
    </div>
  );
};

export default Dashboard;
