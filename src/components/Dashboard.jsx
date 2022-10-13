import React from "react";

const Dashboard = () => {
  //list of all users
  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;
  fetch("http://206.189.91.54/api/v1/users", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <div>
        <h2>Channels</h2>
        <p>Create new channel</p>
      </div>
      CHAT
    </div>
  );
};

export default Dashboard;
