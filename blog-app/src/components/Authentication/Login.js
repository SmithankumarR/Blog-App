import React from "react";
import { ROOT_URL } from "../../utils/constant";

let email = "charlie@gmail.com";
let password = "Charlie@123";

class Login extends React.Component {
    state = {
        people: []
    }
    login = () => {
        fetch(ROOT_URL + "/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    email,
                    password,
                }
            }),
        })
            .then(res => res.json())
            .then(console.log)
    }
    render() {
        console.log(this.state.people);
        this.login();
        return (
            <ul>
                {this.state.people.map((singlePerson) => {
                    return <li>{singlePerson.name}</li>
                })}
            </ul>
        )
    }
}

export default Login;