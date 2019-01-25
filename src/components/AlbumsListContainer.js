import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { helloWorld } from '../actions/test'
import { addAlbum } from '../actions/albums'


const sleep = time => new Promise(
  resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
)



class AlbumsListContainer extends React.Component {
  state = {}



  componentDidMount() 
  // {
  //   request('https://jsonplaceholder.typicode.com/albums')
  //     .then(response => response.body.map(album => this.props.addAlbum(album.id, album.title)))
  //   // set this.props instead of setstate().
  // }
  {
  sleep(2000)
    .then(message => this.props.addAlbum(1, message))

  sleep(3000)
    .then(message => this.props.addAlbum(2, message))
}
  


  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
    
  }
}

const mapStateToProps = (state) => {
    return  {
      albums: state.albums
    }
  }
export default connect(mapStateToProps, { helloWorld , addAlbum })(AlbumsListContainer)
