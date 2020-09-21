import React from 'react'

const Person = (props) => {

    const person = props.person

    return (
        <li>
            {person.name} {person.number}
            <button onClick={props.remove}>
                Delete
            </button>
        </li>
    )
}

export default Person