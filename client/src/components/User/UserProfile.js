import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

function UserProfile() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      UserProfile
      <h1>{user.name}</h1>
    </div>
  );
}

export default UserProfile;
