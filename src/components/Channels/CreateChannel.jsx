import React from 'react'
import { useState } from 'react';

const CreateChannel = ({ headers, users }) => {

  const [searchInput, setSearchInput] = useState("");
  // var userIDss = JSON.parse(localStorage.getItem("userIdss")) || [];

  // Create variables for headers data
  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  // Search User
  const findUser = users.filter((user) => {
    return user.uid.includes(searchInput);
  });
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };
  const showUser = (e) => {
    e.preventDefault();
    console.log("filteredUsers", findUser[0].id);
    // userIDss.push(findUser[0].id);
    // localStorage.setItem("userIDss", JSON.stringify(userIDss));
    // console.log(userIDss)
  }

  // Create Channel
  const addChannel = async (e) => {
    e.preventDefault();
    
    let userIDs = findUser[0].id;

    try{
        // Fetch Avion API
        const res = await fetch("http://206.189.91.54/api/v1/channels", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
          },
          body: JSON.stringify({
            name: e.target.channelName.value,
            user_ids: [userIDs]
          })
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
  }

  return (
    <div>
      <form onSubmit={showUser}>
      <input
        value={searchInput}
        type="text"
        placeholder="Search user by email"
        // onSubmit={handleSubmit}
        onChange={handleSearchChange}
      />
      <button type="submit">Add User</button>
      </form>
      <form onSubmit={addChannel}>
        <input name="channelName" type="text" placeholder="Channel name"></input>
        <button type="submit">Add Channel</button>
      </form>
    </div>
  )
}

export default CreateChannel
