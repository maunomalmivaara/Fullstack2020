import React from 'react'

const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
}
  
const getSum = (a, b) => {
    return ({
        exercises: a.exercises + b.exercises
    })
}

const Content = ({parts}) => {
    var sum = parts.reduce(getSum).exercises
    return (
      <div>
        {parts.map(part=>
          <Part key={part.id} part={part.name} ex={part.exercises}/>
        )}
        <b>Total of {sum} exercises</b>
      </div>
    )
}

const Part = (props) => {
    return (
      <p>
        {props.part} {props.ex}
      </p>
    )
}

const Course = ({ course }) => {
    return (
      <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
      </>
    )
}

export default Course