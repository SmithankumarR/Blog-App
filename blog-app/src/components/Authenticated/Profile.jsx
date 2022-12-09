import React from "react";
import { FcSettings, } from "react-icons/fc"
function Profile() {
  return (
    <div className="bg-gray-800 text-white p-12">
      <div className="w-2/3 mx-auto">
        <img
          src="https://api.realworld.io/images/smiley-cyrus.jpeg"
          alt="profile-img"
          className="w-24 h-24 mx-auto my-4 rounded-full"
        />
        <h2 className="text-center text-2xl capitalize font-semibold"> my name</h2>
        <span className="float-right">
          <button className="flex border rounded-md py-2 px-4"> <FcSettings /><span className="ml-4"> Edit Profile Settings</span></button>
        </span>


      </div>
    </div>
  );
}

export default Profile;