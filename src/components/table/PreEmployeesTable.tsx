import React, { useEffect } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { getStateFromStorage } from '../../reducers/UsersSlice';
import { User } from '../../types/types';
import EmployeesTable from './EmployeesTable';

interface Props {
    users: User[]
}

const PreEmployeesTable = ({ users }: Props) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(users+'preEmploy');
        
        dispatch(getStateFromStorage(users));
    }, [users]);

    return (
        <div>
            <EmployeesTable />
        </div>
    )
}

export default PreEmployeesTable