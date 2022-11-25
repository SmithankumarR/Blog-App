import React from 'react'

class SignIn extends React.Component {
    state = {
        inputText: "",
        password: null,
    }
    handleInput = ({ target: { value } }) => {
        this.setState({
            inputText: value,
            password: value
        })
    }
    render() {
        return (
                <form className='w-1/3 mx-auto relative '>
                <h1 className='text-3xl text-center'>Sign in</h1>
                <h3 className='text-green-500 font-medium my-2 text-center'>Need an account?</h3>
                <fieldset>
                    <div>
                        <input className='border p-2 rounded-md my-1 w-full' type="email" value={this.state.inputText} placeholder='Email' onChange={this.handleInput} />
                        <input className='border p-2 rounded-md my-1 w-full' type="password" value={this.state.password} name="password" onClick={this.handleInput} placeholder='Password' />
                    </div>
                        <button type="submit" value="Sign in" className='bg-green-500 rounded-md absolute right-0  text-white py-2 px-3 hover:bg-green-600'>Sign In</button>
                </fieldset>
            </form>
        )
    }
}

export default SignIn;