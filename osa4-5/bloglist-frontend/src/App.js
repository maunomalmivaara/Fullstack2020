import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import Button from 'react-bootstrap/Button'

const App = () => {
    const [blogs, setBlogs] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [newMessage, setNewMessage] = useState(null)
    const [newMessageStyle, setNewMessageStyle] = useState('success')
    const blogFormRef = useRef()

    const getAllBlogsHook = () => {
        const fetchData = async () => {
            let blogs = await blogService.getAll()
            blogs = blogs.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
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
                'danger',
                'Login failed: Incorrect credentials',
                5000
            )
        }
    }

    const handleLogout = async () => {
        window.localStorage.removeItem('loggedBlogAppUser')
        setUser(null)
        makeMessage(
            'success',
            'Logged out succesfully!',
            5000
        )
    }

    const addBlog = async (blogObject) => {
        blogFormRef.current.toggleVisibility()

        const createdBlog = await blogService.create(blogObject)
        setBlogs(blogs.concat(createdBlog))

        makeMessage(
            'success',
            `New blog with title "${createdBlog.title}" added!`,
            5000
        )
    }

    const removeBlog = async (id) => {
        const titleOf = blogs.find(b => b.id === id).title
        if (window.confirm(`Do you really want to delete "${titleOf}"?`)) {
            await blogService
                .remove(id)

            setBlogs(blogs.filter(b => b.id !== id))
            makeMessage(
                'success',
                `Successfully removed "${titleOf}"`,
                5000
            )
        }
    }

    const handleLike = async (id) => {

        const blog = blogs.find(b => b.id === id)

        const changedBlog = {
            ...blog,
            likes: blog.likes + 1,
            user: blog.user.id
        }
        const updatedBlog = await blogService
            .update(id, changedBlog)

        setBlogs(blogs.map(blog => blog.id !== id ? blog : { ...updatedBlog, user: blog.user }))
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

    const loginForm = () => (
        <Togglable buttonLabel='Login'>
            <LoginForm
                handleLogin={handleLogin}
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </Togglable>
    )

    const blogForm = () => (
        <Togglable buttonLabel='Add New Blog' ref={blogFormRef}>
            <BlogForm createBlog={addBlog} />
        </Togglable>
    )

    const loggedInText = () => (
        <div className="logged-in-div float-right">
            <div className='logged-in-text text-right'>
                <b className=''>Logged in as </b>
                <h6 id='logged-in-username'>{user.name}</h6>
            </div>
            <div>
                <Button variant='danger' className='btn-sm float-right' onClick={handleLogout}>Log Out</Button>
            </div> 
        </div>
    )

    const blogList = () => (
            <div className="allBlogs white-container">
                <h3>All Blogs:</h3>
                <div id="blogs-listed">
                    {blogs.map(blog =>
                        <Blog
                            key={blog.id}
                            handleLike={handleLike}
                            blog={blog}
                            user={user}
                            remove={removeBlog}
                        />
                    )}
                </div>
            </div>
    )


    return (
        <div className='boxDiv'>
            <div className='row'>
                <div className='col'>
                    <h1>Blog App</h1>
                </div>
                {user === null
                    ? null
                    : <div className='col'>
                            {loggedInText()}
                    </div>
                }
            </div>

            <div className='row'>
                <div className='col'>
                    <Notification message={newMessage} style={newMessageStyle} />
                </div>
            </div>

            {user===null 
                ? <>
                    <div className='row'>
                        <div className='col'>
                            <h3>Log in to Blog App</h3>
                            {loginForm()}
                        </div>
                    </div>
                </>
                : <>
                    <div className='row'>
                        <div className='col'>
                            {blogForm()}
                        </div>
                    </div>
                    <div className='row subdiv-1'>
                        <div className='col'>
                            {blogList()}
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default App