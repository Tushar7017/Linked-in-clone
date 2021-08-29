import React, { useState } from 'react';
import '../style/Login.css';
import linkedin from '../images/Linkedin-login-img.png';
import { auth } from '../../firebase.js'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (ev) => {
        ev.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            })
            .catch(err => alert(err));
    };

    const register = () => {
        if (!name) {
            return alert('Please enter full name');
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profilePic
                            }));
                    });
            })
            .catch(err => alert(err));
    }

    return (
        <div className="login">
            <img src={linkedin} alt="linkedin" />
            <form>
                <input
                    value={name}
                    onChange={ev => setName(ev.target.value)}
                    type='text'
                    placeholder='Full name (required if registring)'
                />
                <input
                    value={profilePic}
                    onChange={ev => setProfilePic(ev.target.value)}
                    type='text'
                    placeholder='Profile pic URL (optional)'
                />
                <input
                    value={email}
                    onChange={ev => setEmail(ev.target.value)}
                    type='email'
                    placeholder='Email'
                />
                <input
                    password={password}
                    onChange={ev => setPassword(ev.target.value)}
                    type='password'
                    placeholder='Password'
                />
                <button
                    type="submit"
                    onClick={loginToApp}>
                    Sign In
                </button>
            </form>
            <p>
                Not a member?{' '}
                <span className="login-register" onClick={register}>Register Now</span>
            </p>
        </div>
    )
}

export default Login