import React, { useState, useEffect } from "react";
import Messaging from "./Messaging";
import Channels from "./Channels/Channels";


const Dashboard = () => {

  // Set states
  const [users, setUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [messagePage, setMessagePage] = useState(false);
  const [channelsPage, setChannelsPage] = useState(false);

  const showMessagePage = () => {
    setMessagePage(true);
    setChannelsPage(false);
  }

  const showChannelsPage = () => {
    setMessagePage(false);
    setChannelsPage(true);
  }

  // Get logged in users' credentials
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"))
  const headers = loginCredentials.headers;
  const body = loginCredentials.body.data;
  const currentUserID = body.email;
  
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
  // console.log(filteredUsers);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };


  return (
    <div>
      <div>Welcome back, {currentUserID}!</div><br/>
      <div className="flex items-center justify-center h-screen">
        <div>
          <button onClick={showMessagePage}>Direct Message</button><br/>
          <button onClick={showChannelsPage}>Channels</button>
        </div>
        <div>
          {messagePage && <Messaging filteredUsers={filteredUsers} searchInput={searchInput} handleSearchChange={handleSearchChange}/>}
          {channelsPage && <Channels users={users} headers={headers} />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
