import { GET_DATAGIT_LIST, GET_DATAGIT_DETAIL } from "../action/datagitAction";

let initialState = {
    getDataGitList : false,
    errorDataGitList: false,
    getDataGitDetail: false,
    errorDataGitDetail: false,
    title: "Data dari Github"
};
const datagit = (state = initialState, action) => {
    switch (action.type) {
        
        case GET_DATAGIT_LIST:
            return {
                ...state,
                getDataGitList:action.payload.data,
                errorDataGitList: action.payload.errorMessage,
            }

        case GET_DATAGIT_DETAIL:
                    return {
                        ...state,
                        getDataGitDetail:action.payload.data,
                        errorDataGitDetail: action.payload.errorMessage,
            }

        default:
            return state
    }
}

export default datagit
