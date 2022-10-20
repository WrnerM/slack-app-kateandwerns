import React, { useState, useEffect } from "react";
import { SearchUser } from "./SearchUser";
import CreateChannel from "./CreateChannel";
import AllChannels from "./AllChannels";
import ChannelDetails from "./ChannelDetails";
import AddMember from "./AddMember";
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

      .then(
        (users) => {
          setUsers(users);
        }
      );
  }, []);

  return (
    <div>
      <div>
        <SearchUser users={users} />
      </div>
      {/* <Messaging /> */}
      <CreateChannel headers={headers} users={users} />
      <AllChannels headers={headers} />
      <ChannelDetails headers={headers} />
      <AddMember headers={headers} />
    </div>
  );
};

export default Dashboard;
