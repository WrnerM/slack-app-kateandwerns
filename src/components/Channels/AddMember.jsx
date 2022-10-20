import React from 'react'

const AddMember = ({ headers }) => {

  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  const addChannelMember = async (e) => {
    e.preventDefault();

    try{
        // Fetch Avion API
        const res = await fetch("http://206.189.91.54/api/v1/channel/add_member", {
            method: "GET",
            headers: {
            // "Content-Type": "application/json",
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
            },
            // body: JSON.stringify({
            // "id":
            // "member_id":
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
      <button onClick={addChannelMember}>Add Member</button>
    </div>
  )
}

export default AddMember
