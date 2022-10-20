import React from 'react'
import { useState } from 'react';
import { SearchUser } from '../SearchUser';

const CreateChannel = ({ headers, filteredUsers, handleSearchChange, searchInput }) => {

  // Create variables for headers data
  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];


  // Create Channel
  const addChannel = async (e) => {
    e.preventDefault();
    
    let userIDs = filteredUsers[0].id;

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
          let currentChannel = data
            console.log(currentChannel)
        })
        // Show error if fetch is unsuccessful
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <div>
        <p>Add Member:</p>
        <SearchUser 
          searchInput={searchInput}
          filteredUsers={filteredUsers} 
          handleSearchChange={handleSearchChange}/>
      </div>
      <form onSubmit={addChannel}>
        <input name="channelName" type="text" placeholder="Channel name"></input>
        <button type="submit">Add Channel</button>
      </form>
    </div>
  )
}

export default CreateChannel
