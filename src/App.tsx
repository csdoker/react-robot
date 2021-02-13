import React from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import robots from './mock/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

function App () {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img className={styles.appLogo} src={logo} alt='' />
        <h1>机器人购物平台</h1>
      </div>
      <ShoppingCart />
      <div className={styles.robotList}>
        {robots.map(robot => <Robot id={robot.id} email={robot.email} name={robot.name} />)}
      </div>
    </div>
  )
}

export default App
