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
        <div><br/>
            <h3>Add New Blog:</h3>
            <form onSubmit={addBlog} id="BlogForm">
                <div>
                    Title:
                    <input
                        type="text"
                        value={blogTitle}
                        name="BlogTitle"
                        id="BlogTitle"
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    Author:
                    <input
                        type="text"
                        value={blogAuthor}
                        name="BlogAuthor"
                        id="BlogAuthor"
                        onChange={handleAuthorChange}
                    />
                </div>
                <div>
                    URL:
                    <input
                        type="text"
                        value={blogUrl}
                        name="BlogUrl"
                        id="BlogUrl"
                        onChange={handleUrlChange}
                    />
                </div>
                <button type="submit">Save Blog</button>
            </form>
        </div>
    )
}


export default BlogForm