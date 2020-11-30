import React, { useState } from 'react'

const Blog = ({ handleLike, blog, user, remove }) => {
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const handleLikeClick = async () => {
        await handleLike(blog.id)
    }

    const handleRemoveClick = async () => {
        await remove(blog.id)
    }

    return expanded
        ? <div className='blog'>
            <h4>{blog.title}</h4>
            <button onClick={handleExpandClick}>Hide</button>
            <p>Author: {blog.author}</p>
            <p>
                URL: <a href={`https://${blog.url}`}>{blog.url}</a>
            </p>
            <p className='blog-likes'>Likes: {blog.likes}
                <button onClick={handleLikeClick} className='like-button'>Like</button>
            </p>
            <p>Added By: {blog.user.username}</p>
            {user.username === blog.user.username
                ? <button onClick={handleRemoveClick}>Remove</button>
                : ''
            }
        </div>
        : <div className='blog blogHidden'>
            <h4>{blog.title}</h4>
            <button onClick={handleExpandClick}>Show</button>
        </div>
}

export default Blog
