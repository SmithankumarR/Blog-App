import React from "react";
import {FcSettings , } from "react-icons/fc"
function Profile() {
  return (
    <div>
      <img
        src="https://api.realworld.io/images/smiley-cyrus.jpeg"
        alt="profile-img"
        className="w-8 h-8 rounded-full"
      />
      <h2> my name</h2>

      <button> <FcSettings /> Edit Profile Settings</button>
    </div>
  );
}

export default Profile;
