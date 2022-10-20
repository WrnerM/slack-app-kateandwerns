import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";
import Channels from "./Channels/Channels";


const Dashboard = () => {

  // Set states
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // Get logged in users' credentials
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"))
  const headers = loginCredentials.headers;

  // Fetch Avion API to get all users
  useEffect(() => {
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
      );
  }, []);

  // Search user
  const filteredUsers = users.filter((user) => {
    return user.uid.toLowerCase().includes(searchInput);
  });
  console.log(filteredUsers);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };


  return (
    <div>
      <div className="Sidebar">
        <button>Direct Message</button>
        <button>Channels</button>
      </div>
      <Messaging filteredUsers={filteredUsers} searchInput={searchInput} handleSearchChange={handleSearchChange}/>
      <Channels users={users} headers={headers} />

    </div>
  );
};

export default Dashboard;
