import axios from 'axios';

export const GET_DATAGIT_LIST = "GET_DATAGIT_LIST";
export const GET_DATAGIT_DETAIL = "GET_DATAGIT_DETAIL";

export const getDataGitList = () => {
    return (dispatch) => {
        axios
        //.get('http://my-json-server.typicode.com/afifbasya/reactjs-redux/users')
        .get('http://my-json-server.typicode.com/dinosukqwerty/dataapiredux/data')
        .then(function (response) {
            dispatch({
                type: GET_DATAGIT_LIST,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_DATAGIT_LIST,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })            
        })
    }
}

export const getDataGitDetail = (id) => {
    return (dispatch) => {
        axios
        .get('http://my-json-server.typicode.com/dinosukqwerty/dataapiredux/data/'+id)
        .then(function (response) {
            dispatch({
                type: GET_DATAGIT_DETAIL,
                payload: {
                    data: response.data,
                    errorMessage: false,
                }
            })
        })
        .catch(function (error) {
            dispatch({
                type: GET_DATAGIT_DETAIL,
                payload: {
                    data: false,
                    errorMessage: error.message,
                }
            })            
        })
    }
}
