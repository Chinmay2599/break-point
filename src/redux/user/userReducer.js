import { LOG_OUT, LOG_USER } from "./userTypes"

const initialState = {
    uid: localStorage.getItem('user'),
    figmaAccess: null,
    projects: [
        {
            name: 'Demo 1',
            lastEdited: '25/02/1999',
            url: null,
            html: null,
            data: null,
        },
        {
            name: 'Demo 2',
            lastEdited: '2/03/2021',
            url: null,
            html: null,
            data: null,
        }
    ]
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_USER:
            localStorage.setItem('user', action.payload.uid)
            return {
                ...state,
                uid: action.payload.uid
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