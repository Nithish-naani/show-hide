// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  firstNameClick = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  lastNameClick = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    const displayFirstName = isFirstName ? <p className="name">Joe</p> : null
    const displayLastName = isLastName ? <p className="name">Jonas</p> : null

    return (
      <div className="main-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameClick}
            >
              Show/Hide Firstname
            </button>
            {displayFirstName}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameClick}
            >
              Show/Hide Lastname
            </button>
            {displayLastName}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
