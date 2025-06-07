import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react'
import { handleError, handleSuccess } from '../utils'
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate()

    const [loginInfo, setloginInfo] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copyloginInfo = { ...loginInfo }
        copyloginInfo[name] = value;
        setloginInfo(copyloginInfo);
    }
    console.log("loginInfo -> ", loginInfo)

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required')
        }
        try {
            const url = "https://jwt-auth-backend-ph2i.onrender.com/auth/login";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            const result = await response.json()
            const { success, message } = result;
            if (success) {
                handleSuccess(message)
                localStorage.setItem('loggedInUser', email);
                setTimeout(() => {
                    navigate('/home', { state: { email } });
                }, 1000)
            }
            console.log(result)
        }
        catch (err) {
            handleError(err)
        }
    }
    return (
        <div className='container'>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>

                <div>
                    <label htmlFor='email'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder="Enter your email..."
                        value={loginInfo.email}

                    />
                </div>   <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder="Enter your password..."
                        value={loginInfo.password}

                    />
                </div>
                <button>Login</button>
                        

                <span>Don't have an account ?
                    <Link to='/signup'>Sign up</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Login
