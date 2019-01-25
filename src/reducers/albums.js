export default (state = [], action = {}) => {
    switch (action.type){
      case 'ADD_ALBUM':
        return [
          ...state,
          action.payload
        ]
      case 'SET_ALBUM':
        return [
          ...state,
          action.payload
        ]
      default:
      return state
    }
   
}




  // const reducer = (state = initialState, action = {}) => {
  //   switch (action.type) {
  //   case 'ADD_PIZZA':
  //   return [
  //     ...state,
  //     action.payload
  //   ]
  //   default:
  //     return state
  //   }
  // }