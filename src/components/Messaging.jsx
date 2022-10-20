import React, { useEffect, useState } from 'react'
import { SearchUser } from './SearchUser';

const Messaging = ({filteredUsers, handleSearchChange, searchInput}) => {

  // Get logged in user's credentials
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  const headers = loginCredentials.headers;

  const [sendMsg, setSendMsg] = useState({});
  const [receiveMsg, setReceiveMsg] = useState([]);
  const [senderUid, setSenderUid] = useState("");
  const [emptySendMessage, setEmptySendMessage] = useState("");
 
  // Create variables for headers data
  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  // Set timeout for retrieve message
  const SECOND = 1000;

  useEffect(() => {
    const interval = setInterval(() => {

// Retrieve messages
const retrieveMessage = async (e) => {
  let receiverID = filteredUsers[0].id;
  try{
    // Fetch Avion API
    const res = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=User`,{
      method: "GET",
      headers: {
        "access-token": accessToken,
        client: clientData,
        expiry: expiryData,
        uid: uidData,
      }
    })
      .then((res) => res.json())
      .then((res) => res.data)
      // Show data if fetch is successful
      .then((receiveMsg) => {
        setReceiveMsg(receiveMsg);
      });

    // Show error if fetch is unsuccessful
  } catch (error) {
    console.log(error);
  }
};

retrieveMessage();

    }, SECOND);
    return () => clearInterval(interval);
  }, [filteredUsers, handleSearchChange, searchInput, sendMsg]);

  
  const recentChatHistory = receiveMsg.slice(-11);

  // Send message
  const sendMessage = async (e) => {
    e.preventDefault();

    let receiverID = filteredUsers[0].id;
    let body = e.target.messageBox.value;

      try{
        // Fetch Avion API
        const res = await fetch(`http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=User&body=${body}`,{
          method: "POST",
          headers: {
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
          }
        })
          .then((res) => res.json())
          .then((res) => res.data)
          .then((sendMsg) => {
          setSendMsg(sendMsg);
        });

        // Show error if fetch is unsuccessful
      } catch (error) {
        console.log(error);
      }

      body = "";
  };

  return (
    <div>
      <h3 className="directMessages">Direct Messages</h3>
      <div>
        <p>Send Message To:</p>
        <SearchUser 
          searchInput={searchInput}
          filteredUsers={filteredUsers} 
          handleSearchChange={handleSearchChange}/>
      </div>
      <div className="chatMsgs">
        <ul>
          {receiveMsg.map((chats) => (
            <li className="messagesList" key={chats.id}>
              <span className="userDisplay">{chats.sender.uid}</span>
              {chats.body}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={sendMessage}>
        <textarea
          className="sendMsgBox"
          name="messageBox"
          type="textarea"
          placeholder="Type message..."
        />
        <button className="sendMsgButton" type="submit">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Messaging