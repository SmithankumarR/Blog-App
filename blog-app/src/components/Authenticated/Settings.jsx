import React from "react";
import { userVerifyURL } from "../../utils/constant";
import { withRouter } from "react-router-dom";


class Settings extends React.Component {
  state = {
    image: "",
    userName: "",
    bio: "",
    email: "",
    password: "",
    errors: {
      image: "",
      userName: "",
      bio: "",
      email: "",
      password: ""
    },
  };
  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { image, userName, bio, email, password } = this.state
    fetch(userVerifyURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Token ${this.props.user.token} `,
      },
      body: JSON.stringify({
        user: {
          email,
          bio,
          image,
          userName,
          password
        },
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Can not create new article");
        }
        return res.json();
      })
      .then(({ user }) => {
        console.log(user);
        this.setState({
          email: "",
          bio: "",
          image: "",
          userName: "",
          password: ""
        });
        this.props.history.push("/");
      })
      .catch((errors) => this.setState({ errors }));

  };
  handleLogout = () => {
    localStorage.clear()
    this.props.history.push("/");

  }
  render() {
    const { image, userName, bio, email, password } = this.state

    return (
      <div>
        <form className="w-1/3 m-auto bg-gray-100 rounded-md p-4 shadow-lg ">

          <h1 className="text-center text-2xl font-bold mb-4"> Your Settings</h1>

          <input
            type="url"
            name="image"
            placeholder="https://api.realworld.io/images/smiley-cyrus.jpeg"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
            value={image}

          />
          <input
            type="text"
            name="username"
            placeholder="userName"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
            value={userName}


          />
          <textarea name="bio" id="" cols="30" rows="10"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
            value={bio}
            placeholder="short bio about you">

          </textarea>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
            value={email}


          />
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-full rounded-md text-slate-500 border p-4 mt-2"
            onChange={this.handleChange}
            value={password}

          />
          <button
            onClick={this.handleSubmit}
            className=" bg-slate-600 float-right mt-3 hover:bg-slate-500 py-4 px-4 text-white rounded-md" type="submit">
            Update Settings</button>
          <button
            onClick={this.handleLogout} className="border py-2 px-4 border-red-800 text-red-800 m-4 rounded-md">Or click here to logout</button>

        </form>
      </div>
    );
  }
}
export default withRouter(Settings);