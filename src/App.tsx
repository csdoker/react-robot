import React from 'react'
import styles from './App.module.css'

import robots from './mock/robots.json'
import Robot from './components/Robot'

function App () {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {robots.map(robot => <Robot id={robot.id} email={robot.email} name={robot.name} />)}
      </div>
    </div>
  )
}

export default App
