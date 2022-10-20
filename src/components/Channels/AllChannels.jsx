import React from 'react'
import { useState, useEffect } from 'react';

const AllChannels = ({ headers }) => {

  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  const [channels, setChannels] = useState([]);
  
  useEffect(() =>{
    getChannels();
  }, []);

  const getChannels = async () => {

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
        .then((res) =>{
          console.log(res);
          setChannels(res.data);
        })

        // Show data if fetch is successful
        // .then((data) => {
        //     console.log(data)
        // })

      // Show error if fetch is unsuccessful
    } catch (error) {
        console.log(error);
    }
  }
    
  return (
    <div>
      <p>User's channels:</p>
      <div className="border-2 border-black w-52">
        {channels.map((channel) => (
          <div key={channel.id}>
            <p>{channel.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllChannels
