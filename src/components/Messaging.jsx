import React from 'react'

const Messaging = ({loginCredentials}) => {

  const searchUser = (e) => {

  }

  const retrieveMessage = (e) => {
    e.preventDefault();

      try{
        // Fetch Avion API
        const res = await fetch("http://206.189.91.54/api/v1/messages?receiver_id=1&receiver_class=User",{
          method: "GET",
          headers: {
            "access-token":
            client:
            expiry:
            uid:
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
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    // let receiverID = data.map(x => x.id);

      try{
        // Fetch Avion API
        const res = await fetch("http://206.189.91.54/api/v1/messages",{
          method: "POST",
          body: {
            // "receiver_id": receiverID,
            "receiver_class": "User",
            "body": e.target.sendMessage.value
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
  };

  return (
    <div>
      <div>
        <input name="searchBar" type="text" placeholder="Search User" />
        <button id="searchUser" onClick={searchUser}>+</button>
      </div>
      <div>
        square showing messages
      </div>
      <div>
        <input name="messageBox" type="text" placeholder="Type message..."/>
        <button id="sendMessage" onClick={sendMessage}>Send message</button>
      </div>
    </div>
  )
}

export default Messaging