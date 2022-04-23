import { LOG_OUT, LOG_USER, UPDATE_PROJECTS } from "./userTypes"

const initialState = {
    uid: localStorage.getItem('user'),
    figmaAccess: null,
    projects: []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_USER:
            localStorage.setItem('user', action.payload.uid)
            return {
                ...state,
                uid: action.payload.uid
            }
        case UPDATE_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case LOG_OUT:
            localStorage.removeItem('user')
            return {
                ...state,
                uid: null
            }
        default:
            return state
    }
}

export default userReducer