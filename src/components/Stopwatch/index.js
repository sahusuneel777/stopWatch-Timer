import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    elapsedTimeInSeconds: 0,
    defaultTimerValueInSeconds: 0,
    isTimerRunning: false,
  }

  clearIntervalId = () => clearInterval(this.IntervalId)

  incrementElapsedTimeInSeconds = () => {
    // const {elapsedTimeInSeconds} = this.state
    this.setState(prevState => ({
      elapsedTimeInSeconds: prevState.elapsedTimeInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    const {isTimerRunning} = this.state

    if (!isTimerRunning) {
      this.IntervalId = setInterval(this.incrementElapsedTimeInSeconds, 1000)
    }
    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  onStopTimer = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.clearIntervalId()
    }
    this.setState(prevState => ({
      isTimerRunning: !prevState.isTimerRunning,
    }))
  }

  onResetTimer = () => {
    // const {elapsedTimeInSeconds} = this.state
    this.setState({
      elapsedTimeInSeconds: 0,
      defaultTimerValueInSeconds: 0,
      isTimerRunning: false,
    })
  }

  getTime = () => {
    const {elapsedTimeInSeconds, defaultTimerValueInSeconds} = this.state

    const totalTimeElapsedInSec =
      defaultTimerValueInSeconds + elapsedTimeInSeconds
    const minutes = Math.floor(totalTimeElapsedInSec / 60)
    const seconds = Math.floor(totalTimeElapsedInSec % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="timer-card-container">
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch"
            />
            <p className="timer-description">Timer</p>
          </div>
          <h1 className="running-timer">{this.getTime()}</h1>
          <div className="control-buttons-container">
            <button
              type="button"
              onClick={this.onStartTimer}
              className="button button-start"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onStopTimer}
              className="button button-stop"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onResetTimer}
              className="button button-reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
