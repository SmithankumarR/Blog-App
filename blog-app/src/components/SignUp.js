import React from 'react'

class SignIn extends React.Component {
    state = {
        inputText: "",
        userName: "",
        password: null,
    }
    handleInput = ({ target: { value } }) => {
        this.setState({
            inputText: value,
            userName: value,
            password: value
        })
    }
    render() {
        return (
            <form className='w-1/3 mx-auto relative'>
                <h1 className='text-3xl text-center'>Sign Up</h1>
                <h3 className='text-green-500 font-medium my-2 text-center'>Have an account?</h3>
                <fieldset>
                    <div>
                        <input className='border p-2 rounded-md my-2 w-full' type="text" value={this.state.userName} placeholder='userName' onChange={() => this.handleInput()} />
                        <input className='border p-2 rounded-md my-2 w-full' type="email" value={this.state.inputText} placeholder='Email' onChange={() => this.handleInput()} />
                        <input className='border p-2 rounded-md my-2 w-full' type="password" value={this.state.password} name="password" placeholder='Password' />
                    </div>
                    <button type="submit" value="Sign Up" className='bg-green-500 absolute right-0 py-2 px-4 
                    rounded-md text-white hover:bg-green-600'>SignUp</button>
                </fieldset>
            </form>
        )
    }
}

export default SignIn