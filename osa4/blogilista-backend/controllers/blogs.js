const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog.find({})
        .then(blogs => {
            response.json(blogs)
        })
})
  
blogsRouter.post('/', (request, response) => {
    console.log("REQUEST.BODY: ", request.body)
    const blog = new Blog(request.body)
  
    blog.save()
        .then(savedBlog => {
            response.status(201).json(savedBlog)
        })
    
    console.log("blog: ", blog)
})

module.exports = blogsRouter