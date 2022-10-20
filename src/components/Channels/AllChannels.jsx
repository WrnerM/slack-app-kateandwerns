import React from 'react'

const AllChannels = ({ headers }) => {

  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  const getUsers = async (e) => {
    e.preventDefault();

    try{
        // Fetch Avion API
        const res = await fetch("http://206.189.91.54/api/v1/channels", {
            method: "GET",
            headers: {
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
            }
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
      <button onClick={getUsers}>Get All Channels</button>
    </div>
  )
}

export default AllChannels
