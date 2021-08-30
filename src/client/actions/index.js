export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER' ;

export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users');
  
    // disptach is coming from thunk
    dispatch({
      type: FETCH_USERS,
      payload: res
    });
  };


export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user')

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  })
}