import React from 'react'
const Blog = ({ blog }) => (
    <li className='blog'>
        Title: {blog.title}, Author: {blog.author}
    </li>
)

export default Blog
