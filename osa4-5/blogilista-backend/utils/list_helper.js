const dummy = (blogs) => {
    return 1
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
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}