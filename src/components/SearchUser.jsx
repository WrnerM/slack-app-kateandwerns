import React, { useState } from "react";
import RenderUsersList from "./RenderUsersList";
import Messaging from "./Messaging";

export const SearchUser = ({ users }) => {
  const [searchInput, setSearchInput] = useState("");

  //   const handleSubmit = (e) => e.preventDefault();
  //   console.log(searchUser);
  //   const handleSearchChange = (e) => {
  //     if (!e.target.value) return setSearchUserResults(searchUser);

  //     const usersArray = searchUser.filter(
  //       (userName) =>
  //         userName.uid.includes(e.target.value) ||
  //         userName.id.includes(e.target.value)
  //     );
  //     setSearchUserResults(usersArray);
  //   };

  const filteredUsers = users.filter((user) => {
    return user.uid.includes(searchInput);
  });
  console.log(filteredUsers);
  //console.log("users", users);
  //console.log("searchinput", searchInput);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div>
      <div className="chatBox">
        <h3 className="directMessages">Direct Messages</h3>
        <p>User search:</p>
        <input
          className="searchBoxUser"
          value={searchInput}
          type="text"
          placeholder="Search user by email"
          // onSubmit={handleSubmit}
          onChange={handleSearchChange}
        />
        <div className="chatMsgs"></div>

        <Messaging filteredUsers={filteredUsers} />
      </div>
    </div>
  );
};
