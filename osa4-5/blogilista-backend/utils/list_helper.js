const arrayWithZeroBlogs = []

const arrayWithOneBlog = [
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    }
]

const blogs = [
    {
        _id: '5a422a851b54a676234d17f7',
        title: 'React patterns',
        author: 'Michael Chan',
        url: 'https://reactpatterns.com/',
        likes: 7,
        __v: 0
    },
    {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
        __v: 0
    },
    {
        _id: '5a422b3a1b54a676234d17f9',
        title: 'Canonical string reduction',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
        likes: 12,
        __v: 0
    },
    {
        _id: '5a422b891b54a676234d17fa',
        title: 'First class tests',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
        likes: 10,
        __v: 0
    }, {
        _id: '5a422ba71b54a676234d17fb',
        title: 'TDD harms architecture',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
        likes: 0,
        __v: 0
    },
    {
        _id: '5a422bc61b54a676234d17fc',
        title: 'Type wars',
        author: 'Robert C. Martin',
        url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
        likes: 2,
        __v: 0
    }
]

const oneAuthor = {
    author: 'Edsger W. Dijkstra',
    blogs: 1
}
const authorWithMostBlogs = {
    author: 'Robert C. Martin',
    blogs: 3
}

const authorWithMostLikes = {
    author: 'Edsger W. Dijkstra',
    likes: 17
}


const dummy = (blogs) => {
    return blogs ? 1 : 1
}

const totalLikes = (blogs) => {
    const summer = (a, b) => ({likes: a.likes + b.likes})
    return blogs.reduce(summer, {likes: 0}).likes
}

const favoriteBlog = (blogs) => {
    const betterOfTwo = (a, b) => a.likes > b.likes ? a : b
    return blogs.length === 0
        ? {}
        : blogs.reduce(betterOfTwo, blogs[0])
}

const findWithMost = (blogArr, isBlogs) => {
    if (blogArr.length === 0) return {}

    const authorsWithDupl = blogArr.map(b => {
        return isBlogs
            ? {author: b.author, blogs: 1}
            : {author: b.author, likes: b.likes}
    })
    const authorsUnique = []

    authorsWithDupl.forEach(a => {
        const i = authorsUnique.findIndex(b => b.author === a.author)
        if (i >= 0) {
            authorsUnique[i] = isBlogs
                ? {
                    author: a.author,
                    blogs: authorsUnique[i].blogs + a.blogs
                }
                : {
                    author: a.author,
                    likes: authorsUnique[i].likes + a.likes
                }
        }
        else authorsUnique.push(isBlogs ? {author: a.author, blogs: 1} : {author: a.author, likes: a.likes})
    })

    return authorsUnique.reduce((a, b) => {
        const valueComparison = isBlogs ? a.blogs > b.blogs : a.likes > b.likes
        return valueComparison
            ? a
            : b
    }, authorsUnique[0])
}
const mostBlogs = (blogs) => findWithMost(blogs, true)
const mostLikes = (blogs) => findWithMost(blogs, false)
  
module.exports = {
    arrayWithZeroBlogs,
    arrayWithOneBlog,
    blogs,
    oneAuthor,
    authorWithMostBlogs,
    authorWithMostLikes,
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}