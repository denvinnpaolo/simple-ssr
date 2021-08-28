import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => async dispatch => {
    const res = await axios.get("http://react-ssr-api.herokuapp.com/users")

    // disptach is coming from thunk
    dispatch({
        type: FETCH_USERS,
        payload: res
    });
};