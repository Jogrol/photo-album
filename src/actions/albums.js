export const ADD_ALBUM = 'ADD_ALBUM'

export function addAlbum(id, title) {
  return {
    type: ADD_ALBUM,
    payload: {
      id,
      title
    }
  }
}

export const SET_ALBUMS = 'SET_ALBUMS'

export function setAlbum(albums) {
    return {
        type: SET_ALBUMS,
        payload: [
          albums
        ]
    }
}