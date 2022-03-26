import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../../firebase/Auth"
import { LOG_OUT, LOG_USER } from "./userTypes"

export const logUser = user => {
    return {
        type: LOG_USER,
        payload: user
    }
}

export const signUserIn = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
        .then(res => {
            const user = res.user
            dispatch(logUser(user))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const logOut = () =>{
    return {
        type: LOG_OUT,
    }
}

export const signUserOut = () => {
    return (dispatch) => {
        signOut(auth)
        .then(()=> {
            dispatch(logOut())
        })
        .catch(err => console.log(err))
    }
}