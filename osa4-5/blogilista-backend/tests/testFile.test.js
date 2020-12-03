const listHelper = require('../utils/list_helper')

const dummy = listHelper.dummy
const totalLikes = listHelper.totalLikes
const favoriteBlog = listHelper.favoriteBlog
const mostBlogs = listHelper.mostBlogs
const mostLikes = listHelper.mostLikes

const arrayWithZeroBlogs = listHelper.arrayWithZeroBlogs
const arrayWithOneBlog = listHelper.arrayWithOneBlog
const blogs = listHelper.blogs
const oneAuthor = listHelper.oneAuthor
const authorWithMostBlogs = listHelper.authorWithMostBlogs
const authorWithMostLikes = listHelper.authorWithMostLikes


//DUMMY TEST:
test('dummy returns one', () => {
    const result = dummy(arrayWithZeroBlogs)
    expect(result).toBe(1)
})

//TOTAL LIKES TESTS:
describe('total likes', () => {
    test('of empty list is zero', () => {
        const result = totalLikes([])
        expect(result).toBe(0)
    })

    test('when list has only one blog, equals the likes of that', () => {
        const result = totalLikes(arrayWithOneBlog)
        expect(result).toBe(5)
    })

    test('of a bigger list is calculated right', () => {
        const result = totalLikes(blogs)
        expect(result).toBe(36)
    })
})

//FAVORITE TESTS:
describe('favorite blog', () => {
    test('of empty list is empty object', () => {
        const result = favoriteBlog([])
        expect(result).toEqual({})
    })

    test('when list has only one blog, equals that blog', () => {
        const result = favoriteBlog(arrayWithOneBlog)
        expect(result).toEqual(arrayWithOneBlog[0])
    })

    test('of a bigger list is determined correctly', () => {
        const result = favoriteBlog(blogs)
        expect(result).toEqual(blogs[2])
    })
})

//MOST BLOGS TESTS:
describe('author with most blogs', () => {
    test('of empty list is empty object', () => {
        const result = mostBlogs([])
        expect(result).toEqual({})
    })

    test('when list has only one blog, equals the author of that blog', () => {
        const result = mostBlogs(arrayWithOneBlog)
        expect(result).toEqual(oneAuthor)
    })

    test('of a bigger list is determined correctly', () => {
        const result = mostBlogs(blogs)
        expect(result).toEqual(authorWithMostBlogs)
    })
})

//AUTHOR WITH MOST LIKES TESTS:
describe('author with most likes', () => {
    test('of empty list is empty object', () => {
        const result = mostLikes([])
        expect(result).toEqual({})
    })

    test('when list has only one blog, equals the author and likes of that blog', () => {
        const result = mostLikes(arrayWithOneBlog)
        expect(result).toEqual({
            author: arrayWithOneBlog[0].author,
            likes: arrayWithOneBlog[0].likes
        })
    })

    test('of a bigger list is determined correctly', () => {
        const result = mostLikes(blogs)
        expect(result).toEqual(authorWithMostLikes)
    })
})