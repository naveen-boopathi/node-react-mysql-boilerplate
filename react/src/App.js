import React, { Component, Fragment } from 'react'

class App extends Component {
  state = {
    showStatus: false,
    showErrorMsg: false
  }
  connectService = () => {
    this.makeRequest().then((res) => {
      console.log(res)
      this.setState({ showStatus: true, showErrorMsg: false })
    }).catch((err) => {
      console.log(err)
      this.setState({ showStatus: false, showErrorMsg: true })
    })
  }
  makeRequest = async () => {
    const response = await fetch("/hello")
    const body = await response.json()
    if (response.status !== 200) throw Error(body.message)
    return body
  }
  render() {
    const { showErrorMsg, showStatus } = this.state
    return <Fragment>
      <h1>Welcome to React App.</h1>
      <p>Are we connected with node service? <a href="#" onClick={this.connectService}>Click here!</a></p>
      {showStatus && <p style={{color: "green"}}>Connected with node service successfully!</p>}
      {showErrorMsg && <p style={{ color: "red" }}>Not able to connect with node service!</p>}
      </Fragment>
  }
}

export default App