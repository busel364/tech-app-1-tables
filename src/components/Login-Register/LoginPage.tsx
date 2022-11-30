import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchUser } from '../../app/AsyncFunc/AsyncFunc';
import { useAppDispatch } from '../../app/hooks'
import { createToken } from '../../types/consts';

const LoginPage = () => {

    const dispatch = useAppDispatch();

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('')

    return (
        <div className='loginPanel'>
            <div className='loginDiv'>
                <input
                    value={login}
                    onChange={(e) => {
                        setLogin(e.target.value.trim());
                    }}
                    placeholder='Login'
                    className='input1' />
            </div>
            <div className='loginDiv'>
                <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value.trim());
                    }}
                    placeholder='Password'
                    className='input2'
                    type={'password'} />
            </div>
            <Link to={'/'}>
                <button className='btnLogin buttonHome'
                    onClick={() => {
                        dispatch(fetchUser(createToken(login, password)))
                    }}>Login</button>
            </Link>
            <p className='loginP'>Haven't account here? Continue with register</p>
            <Link to={'/registration'}>
                <button className='btnLoginRegister buttonHome mx-2'>Register</button>
            </Link>
            <Link to={'/'}>
                <button className='btnLoginRegister buttonHome mx-2'>Main Menu</button>
            </Link>
        </div>
    )
}

export default LoginPage