import React from "react";
import validate from "../utils/validate";
import { Link, withRouter } from "react-router-dom"
import { signinURL } from "../utils/constant";
class SignIn extends React.Component {
    state = {
        email: "charlie@gmail.com",
        password: "Charlie@123",
        errors: {
            email: "",
            password: "",
        },
    };
    handleOnChange = (event) => {
        let { name, value } = event.target;
        let errors = { ...this.state.errors };
        validate(errors, name, value)

        this.setState({ [name]: value, errors, });
    };
    handleSubmit = (event) => {
        const { email, password } = this.state;

        event.preventDefault();
        fetch(signinURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: { email, password } }),
        })
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(({ errors }) => {
                        return Promise.reject(errors)
                    })
                }
                return res.json();
            })
            .then(({ user }) => {
                // console.log(user);
                this.props.updateUser(user);
                this.setState({ password: "", email: "" });
                this.props.history.push('/')
            })
            .catch((error) => this.setState((prevState) => {
                return {
                    ...prevState,
                    errors: {
                        ...prevState.errors,
                        email: 'Email or Password is incorrect !',
                    }
                }
            }));
    };
    render() {
        const { email, password, errors } = this.state;
        return (
            <div className="flex justify-between">
                <div className="w-1/2">
                    <img src="./images/SignIn.jpg" alt="sign-in-pic" />
                </div>
                <form className="w-1/3 mx-auto relative " onSubmit={this.handleSubmit}>
                    <h1 className="text-3xl text-center">Sign in</h1>
                    <h3 className="text-gray-500 font-medium my-2 text-center">
                        <Link to="/sign-up" className="hover:text-green-400">
                            Need an account ?
                        </Link>
                    </h3>
                    <fieldset>
                        <div>
                            <input
                                className="border p-2 rounded-md my-1 w-full"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={this.handleOnChange}
                                value={email}
                            />
                            <span className="m-4 text-red-600 text-center font-semibold">{errors.email}</span>
                            <input
                                className="border p-2 rounded-md my-1 w-full"
                                type="password"
                                name="password"
                                onChange={this.handleOnChange}
                                placeholder="Password"
                                value={password}
                            />
                            <span className="m-4 text-red-600 text-center font-semibold">{errors.password}</span>
                        </div>
                        <button
                            type="submit"
                            value="Sign in"
                            disabled={errors.email || errors.password}
                            className="bg-gray-500 rounded-md absolute right-0  text-white py-2 px-3 hover:bg-gray-600 disabled:bg-slate-300 focus:outline-none"
                        >
                            Sign In
                        </button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default withRouter(SignIn);
