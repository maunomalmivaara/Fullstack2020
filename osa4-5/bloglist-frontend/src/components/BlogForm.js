import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

const BlogForm = ({ createBlog }) => {

    const [blogTitle, setBlogTitle] = useState('')
    const [blogAuthor, setBlogAuthor] = useState('')
    const [blogUrl, setBlogUrl] = useState('')

    const addBlog = (event) => {
        event.preventDefault()

        createBlog({
            title: blogTitle,
            author: blogAuthor,
            url: blogUrl
        })
        setBlogTitle('')
        setBlogAuthor('')
        setBlogUrl('')
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

    return (
        <div className="blogFormDiv">
            <h3 className="blogFormTitle">Add New Blog:</h3>
            <form onSubmit={addBlog} id="BlogForm" className="blogInputBox">
                <div className="formInputDiv">
                    <h6 className="inputText">Title:</h6>
                    <input
                        type="text"
                        value={blogTitle}
                        name="BlogTitle"
                        id="BlogTitle"
                        onChange={handleTitleChange}
                        className="blogInputField inputField"
                    />
                </div>
                <div className="formInputDiv">
                    <h6 className="inputText">Author:</h6>
                    <input
                        type="text"
                        value={blogAuthor}
                        name="BlogAuthor"
                        id="BlogAuthor"
                        onChange={handleAuthorChange}
                        className="blogInputField inputField"
                    />
                </div>
                <div className="formInputDiv">
                    <h6 className="inputText">URL:</h6>
                    <input
                        type="text"
                        value={blogUrl}
                        name="BlogUrl"
                        id="BlogUrl"
                        onChange={handleUrlChange}
                        className="blogInputField inputField"
                    />
                </div>
                <Button variant='primary' type="submit" className='btn-sm'>Save Blog</Button>
            </form>
        </div>
    )
}


export default BlogForm