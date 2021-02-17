import axios from 'axios';

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";

export const getUsersList = () => {
    return (dispatch) => {
        axios
        .get('http://localhost:3001/tampil')
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

export const getUserDetail = (id) => {
    return (dispatch) => {
        axios
        .get('http://localhost:3001/tampil/'+id)
        .then(function (response) {
            dispatch({
                type: GET_USER_DETAIL,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_USER_DETAIL,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })            
        })
    }
}
