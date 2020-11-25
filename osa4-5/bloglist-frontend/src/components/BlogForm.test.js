import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import BlogForm from './BlogForm'


describe('<BlogForm />', () => {

    test('<BlogForm /> updates parent states and calls onSubmit', () => {
        const createBlog = jest.fn()

        const component = render(
            <BlogForm createBlog={createBlog} />
        )

        const titleInput = component.container.querySelector('#BlogTitle')
        const authorInput = component.container.querySelector('#BlogAuthor')
        const urlInput = component.container.querySelector('#BlogUrl')
        const form = component.container.querySelector('#BlogForm')

        fireEvent.change(titleInput, {
            target: { value: 'Test Blog' }
        })
        fireEvent.change(authorInput, {
            target: { value: 'Teemu Testaaja' }
        })
        fireEvent.change(urlInput, {
            target: { value: 'www.test.fi' }
        })
        fireEvent.submit(form)

        expect(createBlog.mock.calls).toHaveLength(1)
        expect(createBlog.mock.calls[0][0].title).toBe('Test Blog')
        expect(createBlog.mock.calls[0][0].author).toBe('Teemu Testaaja')
        expect(createBlog.mock.calls[0][0].url).toBe('www.test.fi')
    })
})