import React from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'

const LoginForm = ({
    handleLogin,
    username,
    setUsername,
    password,
    setPassword
}) => {
    return (
        <div className='loginFormDiv'>
            <form onSubmit={handleLogin} className='loginInputBox'>
                <div className='formInputDiv'>
                    <h6 className='inputText'>Username:</h6>
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => setUsername(target.value)}
                        id="username"
                        className="loginInputField inputField"
                    />
                </div>
                <div className='formInputDiv'>
                    <h6 className='inputText'>Password:</h6>
                    <input
                        type="password"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                        id="password"
                        className="loginInputField inputField"
                    />
                </div>
                <Button className='btn-sm' type="submit" id="login-button">Login</Button>
            </form>
        </div>
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