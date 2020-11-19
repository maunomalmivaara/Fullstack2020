import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({
    handleLogin,
    username,
    setUsername,
    password,
    setPassword
}) => {
    return (
        <form onSubmit={handleLogin}>
            <h3>Log in to Blog App</h3>
            <div>
                Username:
                <input
                    type="text"
                    value={username}
                    name="Username"
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div>
                Password:
                <input
                    type="password"
                    value={password}
                    name="Password"
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <button className='btn' type="submit">Login</button>
        </form>
    )
}

LoginForm.propTypes = {
    handleLogin: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm