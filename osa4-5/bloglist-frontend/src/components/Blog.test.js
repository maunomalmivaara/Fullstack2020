import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'


describe('<Blog />', () => {
    let blog
    let user

    beforeEach(() => {
        blog = {
            title: 'Test Title',
            author: 'Teemu Testaaja',
            url: 'www.test.fi',
            likes: 2,
            user: {
                username: 'maukka'
            }
        }

        user = {
            username: 'maukka',
            name: 'Mauno Malmivaara'
        }
    })

    test('renders correct content when NOT expanded', () => {
        const component = render(
            <Blog blog={blog} user={user}/>
        )

        expect(component.container).toHaveTextContent('Test Title')
        expect(component.container).not.toHaveTextContent('Teemu Testaaja')
        expect(component.container).not.toHaveTextContent('www.test.fi')
        expect(component.container).not.toHaveTextContent('likes: 2')
    })

    test('renders correct content when expanded', () => {
        const component = render(
            <Blog blog={blog} user={user}/>
        )

        const button = component.getByText('Show')

        fireEvent.click(button)

        expect(component.container).toHaveTextContent('Test Title')
        expect(component.container).toHaveTextContent('Teemu Testaaja')
        expect(component.container).toHaveTextContent('www.test.fi')
        expect(component.container).toHaveTextContent('Likes: 2')
    })

    test('when "like" is clicked twice, the event is fired twice', () => {
        const mockHandler = jest.fn()

        const component = render(
            <Blog blog={blog} user={user} handleLike={mockHandler}/>
        )

        // Expand first:
        const showButton = component.getByText('Show')
        fireEvent.click(showButton)

        //Hit like twice:
        const likeButton = component.getByText('Like')
        fireEvent.click(likeButton)
        fireEvent.click(likeButton)

        expect(mockHandler.mock.calls).toHaveLength(2)
    })
})