import React from 'react'

class SignIn extends React.Component {
    state = {
        inputText: "",
        password: null,
    }
    handleInput = ({target : { value }}) => {
        this.setState({
            inputText: value,
            password: value
        })
    }
    render() {
        return (
            <form action="" className='w-1/3'>
                <h1 className='text-3xl text-center'>Sign in</h1>
                <h3 className=' text-center text-green-500 font-medium'>Need an account?</h3>
                <fieldset>
                    <div>
                        <input className='border p-2 rounded-md my-1' type="email" value={this.state.inputText} placeholder='Email' onChange={() => this.handleInput()} />
                        <input className='border p-2 rounded-md my-1' type="password" value={this.state.password} name="password" placeholder='Password' />
                    </div>
                    <input type="submit" value="Sign in" className='bg-green-400 justify-end text-white py-2 px-3 hover:bg-green-600' />
                </fieldset>
            </form>
        )
    }
}

export default SignIn