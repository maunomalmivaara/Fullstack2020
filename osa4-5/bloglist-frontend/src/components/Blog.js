import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

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
        ? <div className='blog white-container'>
            <div className='title-and-showbutton-div'>
                <h2>{blog.title}</h2>
                <Button variant='secondary' className='btn-sm' style={{float: 'right', verticalAlign:'text-top'}} onClick={handleExpandClick}>Hide</Button>
            </div>
            <p>Author: {blog.author}</p>
            <p>
                URL: <a href={`https://${blog.url}`}>{blog.url}</a>
            </p>
            <p className='blog-likes'>Likes: {blog.likes}
                <Button variant='success' className='like-button btn-sm' onClick={handleLikeClick}>
                    Like
                </Button>
            </p>
            <p>Added By: {blog.user.username}</p>
            {user.username === blog.user.username
                ? <Button variant='danger' size='sm' onClick={handleRemoveClick}>Remove</Button>
                : ''
            }
        </div>
        : <div className='blog white-container blogHidden'>
            <h5>{blog.title}</h5>
            <Button style={{float: 'right', verticalAlign: 'middle'}} variant='info' className='btn-sm' onClick={handleExpandClick}>Show</Button>
        </div>
}

export default Blog
