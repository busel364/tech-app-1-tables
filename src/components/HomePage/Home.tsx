import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <div className='homePanel'>
                <Link to={'tables'} className='link'>
                    <button className='buttonHome btnHome1'>Yours Tables
                    </button>
                </Link>
                <Link to={'new_table'} className='link'>
                    <button className='buttonHome btnHome2'>
                        Create new Table
                    </button>
                </Link>
                <div className='row-cols-2 '>
                    Have alredy account here?
                    <br></br>
                    <Link to={'login'}>Sign in </Link>|
                    <Link to={'registration'}> Sign up</Link>
                </div>
            </div>

        </div>
    )
}

export default Home