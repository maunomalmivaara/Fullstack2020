import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    const [user, setUser] = useState(null)
    const [newMessage, setNewMessage] = useState(null)
    const [newMessageStyle, setNewMessageStyle] = useState('success')
    const [blogTitle, setBlogTitle] = useState('')
    const [blogAuthor, setBlogAuthor] = useState('')
    const [blogUrl, setBlogUrl] = useState('')

    const getAllBlogsHook = () => {
        const fetchData = async () => {
            const blogs = await blogService.getAll()
            setBlogs( blogs )
        }
        fetchData()
    }

    const checkIfLoggedInHook = () => {
        const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
        if (loggedUserJSON) {
          const loggedUser = JSON.parse(loggedUserJSON)
          setUser(loggedUser)
          blogService.setToken(loggedUser.token)
        }
    }

    useEffect(getAllBlogsHook, [])
    useEffect(checkIfLoggedInHook, [])

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const userToLogin = await loginService.login({
                username,
                password,
            })
            window.localStorage.setItem(
                'loggedBlogAppUser', JSON.stringify(userToLogin)
            )
            blogService.setToken(userToLogin.token)
            setUser(userToLogin)
            setUsername('')
            setPassword('')
            makeMessage(
                'success', 
                'Logged in succesfully!',
                5000
            )
        }
        catch (exception) {
            makeMessage(
                'error', 
                'Login failed: Incorrect credentials',
                5000
            )
        }
    }

    const handleLogout = () => {
        window.localStorage.removeItem('loggedBlogAppUser')
        window.location.reload();
    }

    const addBlog = async (event) => {
        event.preventDefault()

        const blogObject = {
            title: blogTitle,
            author: blogAuthor,
            url: blogUrl
        }
  
        const createdBlog = await blogService.create(blogObject)
        setBlogs(blogs.concat(createdBlog))
        
        makeMessage(
            'success', 
            `New blog with title "${blogTitle}" added!`,
            5000
        )
        
        setBlogAuthor('')
        setBlogUrl('')
        setBlogTitle('')
    }

    const handleTitleChange = (event) => {
        setBlogTitle(event.target.value)
    }
    const handleAuthorChange = (event) => {
        setBlogAuthor(event.target.value)
    }
    const handleUrlChange = (event) => {
        setBlogUrl(event.target.value)
    }

      //Function for displaying messages:
    const makeMessage = (style, message, ms) => {
        setNewMessageStyle(style)
        setNewMessage(message)
        messageTimeOut(ms)
    }

    //Function for setting time out for messages:
    const messageTimeOut = (ms) => {
        return setTimeout(() => {setNewMessage(null)}, ms)
    }

    return (
        <div className='boxDiv'>
            <h1>Blog App</h1>
            <Notification message={newMessage} style={newMessageStyle}
             />
            {user === null
                ? <div>
                    <LoginForm
                        handleLogin={(event) => handleLogin(event)}
                        username={username}
                        password={password}
                        setUsername={setUsername}
                        setPassword={setPassword}
                    />
                </div>
                : <div>
                    <p>Logged in as {user.name}</p>
                    <button onClick={() => handleLogout()}>Log Out</button>
                    <BlogForm
                        addBlog={addBlog}
                        blogTitle={blogTitle}
                        blogAuthor={blogAuthor}
                        blogUrl={blogUrl}
                        handleTitleChange={(event) => handleTitleChange(event)}
                        handleAuthorChange={(event) => handleAuthorChange(event)}
                        handleUrlChange={(event) => handleUrlChange(event)}
                    />
                    <h3>All Blogs:</h3>
                    <ul>
                        {blogs.map(blog =>
                            <Blog key={blog.id} blog={blog} />
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default App