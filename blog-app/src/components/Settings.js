import React from "react";

function Settings(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="https://api.realworld.io/images/smiley-cyrus.jpeg"
          className="rounded-md p-4"
        />
        <input
          type="text"
          name="username"
          placeholder="userName"
          className="rounded-md p-4"
        />
        <textarea name="" id="" cols="30" rows="10" placeholder="short bio about you">

        </textarea>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded-md p-4"
        />
         <input
          type="password"
          name="password"
          placeholder="password"
          className="rounded-md p-4"
        />
        <button className="p-2" >Update Settings</button>
      </form>
      <hr  className="w-full"/>
      <button className="border border-red-800 text-red-800 m-4 rounded-md">Or click here to logout</button>
    </div>
  );
}

export default Settings;
