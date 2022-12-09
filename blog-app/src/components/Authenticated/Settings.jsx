import React from "react";

function Settings(props) {
  return (
    <div>
      <form className="w-1/3 m-auto bg-gray-100 rounded-md p-4 shadow-lg ">
      <h1 className="text-center text-2xl font-bold mb-4"> Your Settings</h1>
        <input
          type="text"
          placeholder="https://api.realworld.io/images/smiley-cyrus.jpeg"
          className="w-full rounded-md text-slate-500 border p-4 mt-2"

        />
        <input
          type="text"
          name="username"
          placeholder="userName"
          className="w-full rounded-md text-slate-500 border p-4 mt-2"


        />
        <textarea name="" id="" cols="30" rows="10"
          className="w-full rounded-md text-slate-500 border p-4 mt-2"
          placeholder="short bio about you">

        </textarea>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-md text-slate-500 border p-4 mt-2"


        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="w-full rounded-md text-slate-500 border p-4 mt-2"

        />
        <button
          className=" bg-slate-600 float-right mt-3 hover:bg-slate-500 py-4 px-4 text-white rounded-md" type="submit">
          Update Settings</button>
        <button className="border py-2 px-4 border-red-800 text-red-800 m-4 rounded-md">Or click here to logout</button>
      </form>
    </div>
  );
}

export default Settings;