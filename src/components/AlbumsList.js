import * as React from 'react'

export default function AlbumsList (props) {

  return (<div>
    <h1>All Albums</h1>
    {props.albums.map((album) => 
      <li key={album.id}>{album.title}</li>)}

    There are { props.albums.length } albums available.
  </div>)
}