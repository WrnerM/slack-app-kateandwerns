import React, { useState } from "react";
import Messaging from "./Messaging";

export const SearchUser = ({ searchInput, handleSearchChange, filteredUsers }) => {
  // const [searchInput, setSearchInput] = useState("");

  // const filteredUsers = users.filter((user) => {
  //   return user.uid.toLowerCase().includes(searchInput);
  // });
  // console.log(filteredUsers);

  // const handleSearchChange = (e) => {
  //   setSearchInput(e.target.value);
  // };

  return (
    <div>
      <div className="chatBox">
        <p>Send Message To:</p>
        <input
          className="searchBoxUser"
          value={searchInput}
          type="text"
          placeholder="Search user by email"
          // onSubmit={handleSubmit}
          onChange={handleSearchChange}
        />
        <ul className="listOfUsers">
          {filteredUsers.map((email) => (
            <li key={email.id}>{email.email}</li>
          ))}
        </ul>
        {/* <RenderUsersList /> */}
        {/* <Messaging filteredUsers={filteredUsers}/> */}
      </div>
    </div>
  );
};
