import React, { useState } from "react";
import RenderUsersList from "./RenderUsersList";
import Messaging from "./Messaging";

export const SearchUser = ({ users }) => {
  const [searchInput, setSearchInput] = useState("");

  const filteredUsers = users.filter((user) => {
    return user.uid.toLowerCase().includes(searchInput);
  });
  console.log(filteredUsers);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div className="chatBox">
        <h3 className="directMessages">Direct Messages</h3>
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
        <Messaging filteredUsers={filteredUsers}/>
      </div>
    </div>
  );
};
