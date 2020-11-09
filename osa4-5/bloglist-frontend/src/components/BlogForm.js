import React from 'react'

const BlogForm = (props) => {

    return (
        <div><br/>
            <h3>Add New Blog:</h3>
            <form onSubmit={props.addBlog}>
                <div>
                    Title:
                    <input
                        type="text"
                        value={props.blogTitle}
                        name="BlogTitle"
                        onChange={props.handleTitleChange}
                    />
                </div>
                <div>
                    Author:
                    <input
                        type="text"
                        value={props.blogAuthor}
                        name="BlogAuthor"
                        onChange={props.handleAuthorChange}
                    />
                </div>
                <div>
                    URL:
                    <input
                        type="text"
                        value={props.blogUrl}
                        name="BlogUrl"
                        onChange={props.handleUrlChange}
                    />
                </div>
                <button type="submit">Save Blog</button>
            </form> 
        </div>
    )
}


export default BlogForm