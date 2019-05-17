import React, { Component } from 'react'
import Artist from '../components/Artist'
import Tracks from '../components/Tracks'

const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {

  state = {
    artistQuery: '',
    artist: null,
    tracks: []
  }

  updateArtistQuery = (e) => {
    this.setState({ artistQuery: e.target.value })
  }

  searchArtist = () => {
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
      .then(response => response.json())
      .then(json => {
        if(json.artists.total > 0){
          const artist = json.artists.items[0]
          this.setState({ artist })

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
            .then(response => response.json())
            .then(json => this.setState({ tracks: json.tracks }))
            .catch(error => alert(error.message))
        }
      })
      .catch(error => alert(error.message))
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
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    )
  }
}

export default App