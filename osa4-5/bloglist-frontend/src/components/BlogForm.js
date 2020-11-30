import React, { useState } from 'react'

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
        <div className="blogFormDiv subdiv-1">
            <h3 className="blogFormTitle">Add New Blog:</h3>
            <form onSubmit={addBlog} id="BlogForm" className="blogInputBox">
                <div className="blogInput">
                    <h5 className="blogInputText">Title:</h5>
                    <input
                        type="text"
                        value={blogTitle}
                        name="BlogTitle"
                        id="BlogTitle"
                        onChange={handleTitleChange}
                        className="blogInputField"
                    />
                </div>
                <div className="blogInput">
                    <h5 className="blogInputText">Author:</h5>
                    <input
                        type="text"
                        value={blogAuthor}
                        name="BlogAuthor"
                        id="BlogAuthor"
                        onChange={handleAuthorChange}
                        className="blogInputField"
                    />
                </div>
                <div className="blogInput">
                    <h5 className="blogInputText">URL:</h5>
                    <input
                        type="text"
                        value={blogUrl}
                        name="BlogUrl"
                        id="BlogUrl"
                        onChange={handleUrlChange}
                        className="blogInputField"
                    />
                </div>
                <button type="submit">Save Blog</button>
            </form>
        </div>
    )
}


export default BlogForm