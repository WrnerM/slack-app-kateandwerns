import React from "react";
import { SearchUser } from "./SearchUser";

const Messaging = ({ filteredUsers }) => {
  // Get logged in user's credentials
  const loginCredentials = JSON.parse(localStorage.getItem("loginCredentials"));
  const headers = loginCredentials.headers;

  // Create variables for headers data
  let accessToken = headers["access-token"];
  let clientData = headers["client"];
  let expiryData = headers["expiry"];
  let uidData = headers["uid"];

  const retrieveMessage = async (e) => {
    let receiverID = filteredUsers[0].id;
    try {
      // Fetch Avion API
      const res = await fetch(
        `http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=User`,
        {
          method: "GET",
          headers: {
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
          },
        }
      )
        .then((res) => res.json())

        // Show data if fetch is successful
        .then((data) => {
          console.log(data);
        });

      // Show error if fetch is unsuccessful
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    let receiverID = filteredUsers[0].id;
    let body = e.target.messageBox.value;

    try {
      // Fetch Avion API
      const res = await fetch(
        `http://206.189.91.54/api/v1/messages?receiver_id=${receiverID}&receiver_class=User&body=${body}`,
        {
          method: "POST",
          headers: {
            "access-token": accessToken,
            client: clientData,
            expiry: expiryData,
            uid: uidData,
          },
        }
      )
        .then((res) => res.json())

        // Show data if fetch is successful
        .then((data) => {
          console.log(data);
        });

      // Show error if fetch is unsuccessful
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <div>
        <input name="searchBar" type="text" placeholder="Search User" />
        <button onClick={searchUser}>+</button>
      </div> */}
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

      <button onClick={retrieveMessage}>Retrieve Messages</button>
    </div>
  );
};

export default Messaging;
