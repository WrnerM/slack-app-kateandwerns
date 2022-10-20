import React, { useState } from "react";

export const SearchUser = ({ searchInput, handleSearchChange, filteredUsers }) => {

  return (
    <div>
      <div className="chatBox">
        <input
          className="searchBoxUser"
          value={searchInput}
          type="text"
          placeholder="Search user by email"
          onChange={handleSearchChange}
        />
        <ul className="listOfUsers">
          {filteredUsers.map((email) => (
            <li key={email.id}>{email.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
