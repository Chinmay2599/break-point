import axios from "axios"
import { signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../../Auth/firebase/Auth"
import { LOG_OUT, LOG_USER, UPDATE_PROJECTS } from "./userTypes"

export const logUser = user => {
    return {
        type: LOG_USER,
        payload: user
    }
}

export const updateProjects = projects => {
    return {
        type: UPDATE_PROJECTS,
        payload: projects
    }
}

export const signUserIn = () => {

    return dispatch => {
        signInWithPopup(auth, provider)
            .then(res => {
                const user = res.user
                user.getIdToken().then(token => {

                    axios.get(`http://localhost:3000/api/user/projects`, {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    })
                        .then(res => {
                            dispatch(updateProjects(res.data.projects))
                        })
                        .catch(e => console.log(e.message))
                    dispatch(logUser(user))

                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
    }
}

export const signUserOut = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logOut())
            })
            .catch(err => console.log(err))
    }
}

