import React, { useState } from "react";
import { SearchUser } from "./SearchUser";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  //list of all users

  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;

  fetch("http://206.189.91.54/api/v1/users", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((res) => res.data)

    .then(
      (users) => {
        setUsers(users);
      }
      //users.map((user) => {
      //setSearchUser(user);
      //console.log(user);
      //return { label: user.uid, value: user.id };
      //})
    );
  //.then((data) => setSearchUser(data));

  return (
    <div>
      <div>
        <SearchUser
          users={users}
          //setSearchUserResults={setSearchUserResults}
        />
      </div>
      CHAT
    </div>
  );
};

export default Dashboard;
