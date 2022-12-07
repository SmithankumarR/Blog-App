import React from "react";
import { ROOT_URL } from "../../utils/constant";

let userName = "Charlie";
let email = "charlie@gmail.com";
let password = "Charlie@123";

class Register extends React.Component {
    state = {
        people: []
    }
    login = () => {
        fetch(ROOT_URL + "/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    userName,
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

export default Register;