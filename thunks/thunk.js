


export const thunk = () => {
  
  return async(dispatch, getState) => {
    dispatch( storeReducer() );

    // TODO: realizar peitción http
  }

}
