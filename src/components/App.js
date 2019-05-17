import React, { Component } from 'react'

class App extends Component {

  state = {
    artistQuery: ''
  }

  updateArtistQuery = (e) => {
    this.setState({ artistQuery: e.target.value })
  }

  searchArtist = () => {
    console.log(this.state)
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.searchArtist()
    }
  }

  render() {
    return(
      <div>
        <h2>Music Master</h2>
        <input 
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          value={this.state.artistQuery}
          placeholder='Search for an Artist' 
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default App