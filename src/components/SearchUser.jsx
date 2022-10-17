import React, { useId, useState } from "react";

const SearchUser = () => {
  const handleChange = (e) => {
    e.preventDefault();
    setSearchUser(e.target.value);
  };
  if (searchUser.length > 0) {
    uid.filter((user) => {
      return;
    });
  }

  return <div>SearchUser</div>;
};

export default SearchUser;
