import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React, { useState } from 'react'
import { handleError, handleSuccess } from '../utils'
import { useNavigate } from 'react-router-dom';

function Signup() {

    const navigate = useNavigate()

    const [signupInfo, setsignupInfo] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copysignupInfo = { ...signupInfo }
        copysignupInfo[name] = value;
        setsignupInfo(copysignupInfo);
    }
    console.log("signupInfo -> ", signupInfo)

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, password } = signupInfo;
        if (!name || !email || !password) {
            return handleError('name, email and password are required')
        }
        try {
            const url = "https://jwt-auth-backend-opal.vercel.app/auth/signup";
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            })
            const result = await response.json()
            const { success, message } = result;
            if (success) {
                handleSuccess(message)
                setTimeout(() => {
                    navigate('/login')
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
            <h1>Sign up</h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input
                        onChange={handleChange}
                        type='text'
                        name='name'
                        autoFocus
                        placeholder="Enter your name..."
                        value={signupInfo.name}
                    />
                </div>
                <div>
                    <label htmlFor='name'>Email</label>
                    <input
                        onChange={handleChange}
                        type='email'
                        name='email'
                        placeholder="Enter your email..."
                        value={signupInfo.email}

                    />
                </div>   <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        onChange={handleChange}
                        type='password'
                        name='password'
                        placeholder="Enter your password..."
                        value={signupInfo.password}

                    />
                </div>
                <button>Signup</button>

                <span>Already have an account ?
                    <Link to='/login'>Login</Link>
                </span>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Signup
