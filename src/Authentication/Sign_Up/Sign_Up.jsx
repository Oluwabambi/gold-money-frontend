import React, { useState } from 'react'
import './Sign_Up.css'
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { register } from '../../Utils/Store/features/auth';

const Sign_Up = () => {
    const [state, setState] = useState({
        username:'',
        email: '',
        password: ''
    });
    const dispatch = useDispatch();

    const registerUser = ()=>{
        dispatch(register(state))
        .then(response =>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value
        })
        console.log(state)
    }

    return (
        <>
            <div className='root'>
                <div className='container r'>
                    <div className='f-card'>
                        <h1 className='sign-in_'>Sign Up</h1>
                        <p className='sing-in_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                        <div className='social-media-button'>
                            <a href="https://google.com/" target="_blank" className='buttons'>Sign In With Google</a>
                            <a href="https://facebook.com/" target="_blank" className='buttons'>Sign In With Facebook</a>
                        </div>
                        <div className="sign-in-border-wrapper">
                            <div className="border"></div>
                            <div className="or-text-block">OR</div>
                            <div className="border"></div>
                        </div>
                        <form>
                            <div className='sign-in-input'>
                                <label htmlFor="email">Username</label>
                                <input type="text" placeholder='johndoe' name='username' value={state.username} onChange={handleChange} />
                            </div>
                            <div className='sign-in-input'>
                                <label htmlFor="email">Email Address</label>
                                <input type="text" placeholder='johndoe@gmail.com' name='email' value={state.email} onChange={handleChange}/>
                            </div>
                            <div className='sign-in-input'>
                                <label htmlFor="Password">Password</label>
                                <input type="password" placeholder='********' name='password' value={state.password} onChange={handleChange} />
                            </div>
                            <div className='r'>
                                <span className='r'> <input type="checkbox" />I have read and agreed with the terms and conditions</span>
                            </div>

                            <button type='button' className='sign-in-button' onClick={registerUser}>Sign Up</button>
                            <p>Already have an account? <a href="/signin" className='forgot-pass'>Sign In</a></p>
                        </form>
                    </div>
                    <div className='f-card s-card'>
                        <img src="https://assets.website-files.com/625653855a98a355d49f4743/625d210f948f3b8a968f6697_Sign%20In%20Image.png" alt="people" className='signup-image' />
                        <div className='logo '>
                            <FaMoneyCheckAlt className='pic' />
                            <p >Gold-Money</p>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sign_Up