const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog
        .find({}).populate('user', { username: 1, name: 1, id: 1})
    response.json(blogs)
})
/*
blogsRouter.post('/', async (request, response) => {
    const body = request.body

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)

    const blog = new Blog({
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes,
        user: user._id
    })
    
    const savedBlog = await blog.save()

    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
    
    response.status(201).json(savedBlog.toJSON())
})
*/
blogsRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)
  
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
  
    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
  
    const user = await User.findById(decodedToken.id)
  
    if (!blog.url || !blog.title) {
        return response.status(400).send({ error: 'title or url missing ' })
    }
  
    if (!blog.likes) {
        blog.likes = 0
    }
  
    blog.user = user
    const savedBlog = await blog.save()
  
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()
  
    response.status(201).json(savedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {

    console.log(request.token)
    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const userid = decodedToken.id

    const blog = await Blog.findById(request.params.id)
    if (!blog) {
        response.status(404).end()
        return 
    }

    if ( blog.user.toString() === userid.toString() ) {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    }
    else {
        response.status(403).end()
    }
})

blogsRouter.put('/:id', async (request, response) => {
    const blog = request.body

    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updatedBlog.toJSON())
})

module.exports = blogsRouter