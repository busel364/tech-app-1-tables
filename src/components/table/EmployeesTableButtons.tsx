import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import TableName from './TableName';

const EmployeesTableButtons = () => {

    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className='employeeTableDivButtons my-5 row offset-1'>
            <div className='col'>
                {isClicked ? <TableName setIsClicked={setIsClicked} /> :
                    <button className='buttonHome btnEmployeeTable col'
                        onClick={() => setIsClicked(true)}>
                        Save
                    </button>}
            </div>
            <div className='col'>
                <Link className='link ' to={'/new_table'}>
                    <button className='col buttonHome btnEmployeeTable'>
                        Create new Table
                    </button>
                </Link>
            </div>
            <div className='col'>
                <Link className='link ' to={'/'}>
                    <button className='buttonHome btnEmployeeTable'>
                        Return to Main Page
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default EmployeesTableButtons