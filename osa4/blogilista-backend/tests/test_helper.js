const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        'title': 'First data base blog',
        'author': 'Teemu Tester',
        'url': 'www.youtube.com',
        'likes': 0
    },
    {
        'title': 'Second data base blog',
        'author': 'Maija Mehiläinen',
        'url': 'www.facebook.com',
        'likes': 4
    },
    {
        'title': 'Third data base blog',
        'author': 'Tessa Testaaja',
        'url': 'www.google.com',
        'likes': 1
    }
]

const initialUser = {
    'username': 'teemu',
    'name': 'Teemu Teekkari',
    'password': 'salasanat'
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs,
    initialUser,
    blogsInDb,
    usersInDb
}