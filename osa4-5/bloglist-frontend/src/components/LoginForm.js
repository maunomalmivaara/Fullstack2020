import React from 'react'

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleLogin}>
            <h3>Log in to Blog App</h3>
            <div>
                Username:
                <input
                type="text"
                value={props.username}
                name="Username"
                onChange={({ target }) => props.setUsername(target.value)}
                />
            </div>
            <div>
                Password:
                <input
                type="password"
                value={props.password}
                name="Password"
                onChange={({ target }) => props.setPassword(target.value)}
                />
            </div>
            <button className='btn' type="submit">Login</button>
        </form>
    )
}

export default LoginForm