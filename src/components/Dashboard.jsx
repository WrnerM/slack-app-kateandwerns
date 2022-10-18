import React, { useState } from "react";

const Dashboard = () => {
  const [searchUser, setSearchUser] = useState([]);

  //list of all users

  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;
  fetch("http://206.189.91.54/api/v1/users", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((users) =>
      users.map((user) => {
        return { label: user.uid, value: user.id };
      })
    );
  //.then((data) => console.log(data));

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
