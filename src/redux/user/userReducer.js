import { LOG_OUT, LOG_USER } from "./userTypes"

const initialState = {
    uid: localStorage.getItem('user'),
    figmaAccess: null,
    projects: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_USER:
            return {
                ...state,
                uid: action.payload.uid
            }
        case LOG_OUT:
            return {
                ...state,
                uid: null
            }
        default:
            return state
    }
}

export default userReducer