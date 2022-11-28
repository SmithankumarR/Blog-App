import React from "react";
import validate from "../utils/validate";
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
        validate(errors,name,value)
        this.setState({ [name]: value, errors, });
    };
    handleSubmit = (event) => {
        event.preventDefault();
    };
    render() {
        const { email, password, username, errors } = this.state;
        return (
            <form className="w-1/3 mx-auto relative " onSubmit={this.handleSubmit}>
                <h1 className="text-3xl text-center">Sign Up</h1>
                <h3 className="text-green-500 font-medium my-2 text-center">
                    Have an account?
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
                        <span className="m-4 text-red-600 text-center font-semibold">{errors.username}</span>
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
                        disabled={errors.email || errors.password || errors.username}
                        className="bg-green-500 rounded-md absolute right-0  text-white py-2 px-3 hover:bg-green-600 disabled:bg-slate-300 focus:outline-none"
                    >
                        Sign Up
                    </button>
                </fieldset>
            </form>
        );
    }
}

export default signUp;
