import React from 'react'
import Person from './Person'

const Persons = (props) => {

    return (
        <>
        <ul>
            {props.personsToShow.map(person => 
                <Person key={person.id}
                        person={person}
                        remove={() => props.remove(person.id)}
                />)}
        </ul>
        </>
    )
}

export default Persons