import React from 'react'
import { Link } from 'react-router-dom'

interface Props {
    customStyle:string
}

const YourTablesButtons = ({customStyle}:Props) => {
    return (
        <div>
            <Link className='link' to={'/new_table'}>
                <button className={`buttonHome ${customStyle}1 mx-4`}>
                    Create new Table
                </button>
            </Link>
            <Link className='link' to={'/'}>
                <button className={`buttonHome ${customStyle}2 mx-4`}>
                    Return to Main Page
                </button>
            </Link>
        </div>
    )
}

export default YourTablesButtons