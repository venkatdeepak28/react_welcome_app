// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  trueFalse = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState(prevState => ({isSubscribed: false}))
    } else {
      this.setState(prevState => ({isSubscribed: true}))
    }
  }

  render() {
    const {isSubscribed} = this.state
    let authButton
    if (isSubscribed === true) {
      authButton = (
        <button className="custom-btn" type="submit" onClick={this.trueFalse}>
          Subscribed
        </button>
      )
    } else {
      authButton = (
        <button className="custom-btn" type="submit" onClick={this.trueFalse}>
          Subscribe
        </button>
      )
    }

    return (
      <div className="bg-container">
        <h1 className="main-heading">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        {authButton}
      </div>
    )
  }
}

export default Welcome
