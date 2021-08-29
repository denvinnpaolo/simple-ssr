export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async ( dispatch, getState, api ) => {
    const res = await api.get("/users")

    // disptach is coming from thunk
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};