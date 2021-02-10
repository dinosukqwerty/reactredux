import axios from 'axios';

export const GET_USERS_LIST = "GET_USER_LIST";

export const getUsersList = () => {
    return (dispatch) => {
        axios
        .get('http://localhost:3001/tampil')
        // .get('http://my-json-server.typicode.com/afifbasya/reactjs-redux/users')
        .then(function (response) {
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })            
        })
    }
}
