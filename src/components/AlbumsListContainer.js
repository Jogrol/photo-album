import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { setAlbums } from '../actions/albums'


// const sleep = time => new Promise(
//   resolve => setTimeout(() => resolve(`I waited for ${time} ms`), time)
// )



class AlbumsListContainer extends React.Component {
  state = {}


      componentDidMount() {
      request('https://jsonplaceholder.typicode.com/albums')
      .then(response => this.props.setAlbums(response.body))
    // set this.props instead of setstate().
      }
 
  


  render() {
    console.log(this.props.albums)
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
    
  }
}

const mapStateToProps = (state) => {
    return  {
      albums: state.albums
    }
  }
export default connect(mapStateToProps, { setAlbums })(AlbumsListContainer)


// sleep(2000)
// .then(message => this.props.addAlbum(1, message))

// sleep(3000)
// .then(message => this.props.addAlbum(2, message))
// }


    // componentDidMount() {
    //   sleep(2000)
    //     .then(message => this.props.setAlbums([
    //       {
    //         id: 1,
    //         title: message
    //       },
    //       {
    //         id: 2,
    //         title: 'This is the second album'
    //       },
    //       {
    //         id: 3,
    //         title: 'The last album'
    //       }
    //     ]))
    // }