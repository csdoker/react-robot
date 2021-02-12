import React from 'react'
import './App.css'

import robots from './mock/robots.json'
import Robot from './components/Robot'

function App () {
  return (
    <ul>
      {robots.map(robot => <Robot id={robot.id} email={robot.email} name={robot.name} />)}
    </ul>
  )
}

export default App
