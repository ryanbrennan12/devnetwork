const initialState = {
  isAuthenticated: false,
  user: {},
}

export default function(state = initialState, action) {
  //going to dispatch actions to this reducer
  //test with a switch
  //action is an object which includes a type
  switch(action.type) {
      default:
        return state;
  }
}

