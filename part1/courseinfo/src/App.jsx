const Header = (props) => <h1>{props.course.name}</h1>

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]}/>
      <Part part={props.course.parts[1]}/>
      <Part part={props.course.parts[2]}/>
    </div>
  )
}

const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}

const Total = ({course}) => {
  let total = 0
  course.parts.forEach((part) => {
    total += part.exercises
  })
  return <p>Number of exercises {total}</p>
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

export default App
