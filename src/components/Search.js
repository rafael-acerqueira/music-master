import React, { Component } from 'react'

class Search extends Component {

  state = {
    artistQuery: ''
  }

  updateArtistQuery = (e) => {
    this.setState({ artistQuery: e.target.value })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.searchArtist()
    }
  }

  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery)
  }

  render(){
    return(
      <div>
        <input 
          className='search-input'
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          value={this.state.artistQuery}
          placeholder='Search for an Artist'
        />
        <button
          className='search-button' 
          onClick={this.searchArtist}>
            Search
        </button>
      </div>
    )
  }
}

export default Search
