const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')
const api = supertest(app)
const bcrypt = require('bcrypt')

const User = require('../models/user')
const Blog = require('../models/blog')

let token

describe('blog tests:', () => {

    beforeAll(async () => {
        const initialUser = helper.initialUser
        
        await User.deleteMany({})

        const saltRounds = 10
        const passwordHash = await bcrypt.hash(initialUser.password, saltRounds)

        const user = new User({
            username: initialUser.username,
            name: initialUser.name,
            passwordHash,
        })
    
        await user.save()

        const result = await api
            .post('/api/login')
            .send({
                username: initialUser.username,
                password: initialUser.password
            })
            .expect(200)
            .expect('Content-Type', /application\/json/)

        token = result.body.token
    })

    beforeEach(async () => {
        await Blog.deleteMany({})
        
        let initialBlog = helper.initialBlogs[0]
        await api
            .post('/api/blogs')
            .send(initialBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(201)
        initialBlog = helper.initialBlogs[1]
        await api
            .post('/api/blogs')
            .send(initialBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(201)
        initialBlog = helper.initialBlogs[2]
        await api
            .post('/api/blogs')
            .send(initialBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(201)
        /*const initialBlogs = helper.initialBlogs

        const promiseArray = initialBlogs.map(async blog => {
            return await api
                .post('/api/blogs')
                .send(blog)
                .set({ Authorization: `bearer ${token}` })
                .expect(201)
        })
        await Promise.all(promiseArray)*/
    })

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const blogs = await helper.blogsInDb()
        expect(blogs).toHaveLength(helper.initialBlogs.length)
    })

    test('identifier for each blog is "id"', async () => {
        const blogs = await helper.blogsInDb()
        blogs.forEach(b => expect(b.id).toBeDefined())
    })

    test('a valid blog can be added ', async () => {
        const newBlog = {
            'title': 'test database fourth blog',
            'author': 'Mauno Malmivaara',
            'url': 'www.nygård.com',
            'likes': 10
        }
    
        await api
            .post('/api/blogs')
            .send(newBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
        
        const contents = blogsAtEnd.map(b => b.title)
        expect(contents).toContain('test database fourth blog')
    })

    test('a new blog without "likes" field is added with "likes: 0"', async () => {
        const newBlog = {
            'title': 'test database fourth blog',
            'author': 'Mauno Malmivaara',
            'url': 'www.nygård.com'
        }
    
        await api
            .post('/api/blogs')
            .send(newBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(201)
            .expect('Content-Type', /application\/json/)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)
        
        const likesOfLast = blogsAtEnd[blogsAtEnd.length - 1].likes
        expect(likesOfLast).toBe(0)
    })

    test('a new blog without "title" field is responded with 400 Bad Request', async () => {
        const newBlog = {
            'author': 'Mauno Malmivaara',
            'url': 'www.nygård.com',
            'likes': 10
        }
    
        await api
            .post('/api/blogs')
            .send(newBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(400)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    })

    test('a new blog without "url" field is responded with 400 Bad Request', async () => {
        const newBlog = {
            'title': 'test database fourth blog',
            'author': 'Mauno Malmivaara',
            'likes': 10
        }
    
        await api
            .post('/api/blogs')
            .send(newBlog)
            .set({ Authorization: `bearer ${token}` })
            .expect(400)

        const blogsAtEnd = await helper.blogsInDb()
        expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length)
    })
})

describe('user tests, when there is initially one user at db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
    
        const passwordHash = await bcrypt.hash('sekret', 10)
        const user = new User({ username: 'root', passwordHash })
    
        await user.save()
    })
    
    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
            username: 'mluukkai',
            name: 'Matti Luukkainen',
            password: 'salainen',
        }
    
        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)
    
        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)
    
        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await helper.usersInDb()
    
        const newUser = {
            username: 'root',
            name: 'Superuser',
            password: 'salainen',
        }
    
        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)
    
        expect(result.body.error).toContain('`username` to be unique')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })

    test('user without username is not added and is responded with 400 Bad Request', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            name: 'user without username',
            password: 'salainen'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        expect(result.body.error).toBe('missing username or password')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
    test('user without password is not added and is responded with 400 Bad Request', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'user123',
            name: 'user without username'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        expect(result.body.error).toBe('missing username or password')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
    test('user with too short username is not added and is responded with 400 Bad Request', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'us',
            name: 'user with short username',
            password: 'salainen'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        expect(result.body.error).toBe('username must be at least 3 characters')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
    test('user with too short password is not added and is responded with 400 Bad Request', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'user123',
            name: 'user with short password',
            password: 'sa'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)

        expect(result.body.error).toBe('password must be at least 3 characters')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(usersAtStart.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})