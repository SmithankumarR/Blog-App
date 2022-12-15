import React from "react";
import validate from "../utils/validate";
import { signupURL } from "../utils/constant";
import { Link, withRouter } from "react-router-dom";
class signUp extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        errors: {
            email: "",
            username: "",
            password: "",
        },
    };

    handleOnChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };
        validate(errors, name, value);
        this.setState({ [name]: value, errors });
    };

    handleSubmit = (event) => {
        const { username, email, password } = this.state;

        event.preventDefault();
        fetch(signupURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: { username, email, password } }),
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(({ errors }) => {
                        return Promise.reject(errors);
                    })
                }
                return res.json();
            })
            .then(({ user }) => {
                // console.log(user);
                this.props.updateUser(user);
                this.props.history.push('/');
            })
            .catch((errors) => this.setState({ errors }));

    };
    render() {
        const { email, password, username, errors } = this.state;
        return (
            <div className="flex justify-between">
                <div className="w-1/2">
                    <img src="./images/SignUp.jpg" alt="sign-up-pic" />
                </div>
                <form className="w-1/3 m-auto bg-gray-100 rounded-md p-4 shadow-lg " onSubmit={this.handleSubmit}>
                    <h1 className="text-3xl text-center font-bold">Sign Up</h1>
                    <h3 className="text-gray-500 font-medium my-4 text-center">
                        <Link to="/sign-in" className="hover:text-green-400">
                            Have an account ?
                        </Link>
                    </h3>
                    <fieldset>
                        <div>
                            <input
                                className="border p-2 rounded-md my-1 w-full"
                                type="text"
                                name="username"
                                placeholder="username"
                                onChange={this.handleOnChange}
                                value={username}
                            />
                            <span className="m-4 text-red-600 text-center font-semibold">
                                {errors.username}
                            </span>
                            <input
                                className="border p-2 rounded-md my-1 w-full"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleOnChange}
                                value={email}
                            />
                            <span className="m-4 text-red-600 text-center font-semibold">
                                {errors.email}
                            </span>
                            <input
                                className="border p-2 rounded-md my-1 w-full"
                                type="password"
                                name="password"
                                onChange={this.handleOnChange}
                                placeholder="Password"
                                value={password}
                            />
                            <span className="m-4 text-red-600 text-center font-semibold">
                                {errors.password}
                            </span>
                        </div>

                        <button
                            type="submit"
                            value="Sign in"
                            disabled={errors.email || errors.password || errors.username}
                            className="bg-gray-500 rounded-md mt-4 float-right text-white py-2 px-3 hover:bg-gray-600 disabled:bg-slate-300 focus:outline-none"
                        >
                            Sign Up
                        </button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default withRouter(signUp);
