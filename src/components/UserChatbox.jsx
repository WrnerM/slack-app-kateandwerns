import React from "react";

const UserChatbox = () => {
  //list of all users
  const headers = JSON.parse(localStorage.getItem("loginCredentials")).headers;
  fetch("http://206.189.91.54/api/v1/users", {
    method: "GET",
    headers,
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  return <div>UserChatbox</div>;
};

export default UserChatbox;
