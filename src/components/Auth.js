import React, { useState } from 'react'

function Auth({signUp, logout, login}) {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

    const clickHandler = () => {
        signUp(userName, password)
        setUserName('')
        setPassword('')
    }

    const loginClick = () => {
        login(loginEmail, loginPass)
        setLoginEmail('')
        setLoginPass('')
    }

    const logoutClick = () => {
        logout()
    }

  return (
    <div>
        <h2>Sign Up</h2>
        <label htmlFor='username'>Email</label>
        <input type="email" name='username' value={userName} onChange={e=> setUserName(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'  value={password} onChange={e=> setPassword(e.target.value)}/>
        <button onClick={clickHandler}>Sign Up</button>

        <h2>Login</h2>
        <label htmlFor='username'>Email</label>
        <input type="email" name='username' value={loginEmail} onChange={e=> setLoginEmail(e.target.value)}/>
        <label htmlFor='password'>Password</label>
        <input type='password' name='password'  value={loginPass} onChange={e=> setLoginPass(e.target.value)}/>
        <button onClick={loginClick}>Login</button>

        <div>
            <button onClick={logoutClick}>Logout</button>
        </div>
    </div>
  )
}

export default Auth