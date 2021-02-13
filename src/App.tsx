import React from 'react'
import styles from './App.module.css'
import logo from './assets/images/logo.svg'
import robots from './mock/robots.json'
import Robot from './components/Robot'
import ShoppingCart from './components/ShoppingCart'

interface Props {}

interface State {
  robotGallery: any[]
}

class App extends React.Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      robotGallery: []
    }
  }

  componentDidMount () {
    fetch('http://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => {
      this.setState({
        robotGallery: data
      })
    })
  }

  render () {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img className={styles.appLogo} src={logo} alt='' />
          <h1>机器人购物平台</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.robotGallery.map(robot => <Robot id={robot.id} email={robot.email} name={robot.name} />)}
        </div>
      </div>
    )
  }
}

export default App
