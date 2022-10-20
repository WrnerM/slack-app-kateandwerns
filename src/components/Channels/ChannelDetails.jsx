import React from 'react'

const ChannelDetails = ({ headers }) => {

  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  let channelID = 3896;


  const showChannelDetails = async (e) => {
    // e.preventDefault();

    try{
        // Fetch Avion API
        const res = await fetch(`http://206.189.91.54/api/v1/channels/${channelID}`, {
            method: "GET",
            headers: {
            // "Content-Type": "application/json",
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
            },
            // body: JSON.stringify({
            // name: e.target.channelName.value,
            // user_ids: [userIDs]
            // })
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
      <button onClick={showChannelDetails}>Show Channel Details</button>
    </div>
  )
}

export default ChannelDetails
