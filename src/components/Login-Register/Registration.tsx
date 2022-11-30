import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../app/AsyncFunc/AsyncFunc';
import { useAppDispatch } from '../../app/hooks';

const Registration = () => {

    const dispatch = useAppDispatch();

    const [login, setLogin] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');

    const handleRegister = () => {
        if (password1 === password2) {
            dispatch(registerUser({ login, name, password: password1}))
        }
        setLogin('');
        setPassword1('');
        setPassword2('');
        setName('');
    }


    return (
        <div className='registrationPanel'>
            <div className='loginDiv'>
                <input placeholder='Name or Nick Name'
                    onChange={e => {
                        setName(e.target.value.trim());
                    }} />
            </div>
            <div className='loginDiv'>
                <input
                    placeholder='E-mail'
                    onChange={e => {
                        setLogin(e.target.value.trim());
                    }} />
            </div>
            <div className='loginDiv'>
                <input
                    placeholder='Password'
                    type={'password'}
                    onChange={e => {
                        setPassword1(e.target.value.trim());
                    }} />
            </div>
            <div className='loginDiv'>
                <input
                    placeholder='Repeat Password'
                    type={'password'}
                    onChange={e => {
                        setPassword2(e.target.value.trim());
                    }} />
            </div>
            <Link to={'/'}>
                <button className='btnLoginRegister buttonHome mx-2 my-5'
                    onClick={handleRegister}>Register</button>
            </Link>
            <Link to={'/'}>
                <button className='btnLoginRegister buttonHome mx-2 my-5'>Main Menu</button>
            </Link>
        </div>
    )
}

export default Registration