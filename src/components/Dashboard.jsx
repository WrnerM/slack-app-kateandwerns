import React, { useState, useEffect } from "react";
import { SearchUser } from "./SearchUser";
// import Messaging from "./Messaging";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  //list of all users

  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;

  useEffect(() => {
    fetch("http://206.189.91.54/api/v1/users", {
      method: "GET",
      headers,
    })
      .then((res) => res.json())
      .then((res) => res.data)

      .then((users) => {
        setUsers(users);
      });
  }, []);

  return (
    <div>
      <div>
        <SearchUser
          users={users}
          //setSearchUserResults={setSearchUserResults}
        />
      </div>
      {/* <Messaging /> */}
    </div>
  );
};

export default Dashboard;
