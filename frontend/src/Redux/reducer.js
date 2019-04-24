const initialState = {
  currentUser: {},
  myPosts: [],
  ourPosts: []
}

const reducer = (state=initialState, action) => {
  switch(action.type){
    case "SET_CURRENT_USER":
      return({
          ...state,
          currentUser: action.payload.user,
          myPosts: action.payload.my_posts,
          ourPosts: action.payload.our_posts
        })
    case "LOGOUT":
      return({
        ...state,
        ...initialState
      })
    default:
      return state
  }
}

export default reducer
