import React from "react";
import { useState } from "react";
import { SearchUser } from "./SearchUser.jsx";
import { Messaging } from "./Messaging";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  // Get headers of logged in user
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  const headers = loginCredentials.headers;
  // console.log(loginCredentials);
  // console.log(headers);

  // Get list of ALL USERS
  const getUsers = async (e) => {
    e.preventDefault();
    try {
      // Fetch Avion API
      const res = await fetch("http://206.189.91.54/api/v1/users", {
        method: "GET",
        headers: headers,
      })
        .then((res) => res.json())

        .then((users) => {
          setUsers(users);
        })

        // Show data if fetch is successful
        .then((data) => {
          console.log(data);
        });

      // Show error if fetch is unsuccessful
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div>
        <SearchUser
          users={users}
          //setSearchUserResults={setSearchUserResults}
        />
      </div>
      {/* //<Messaging headers={headers} /> */}
    </div>
  );
};

export default Dashboard;
