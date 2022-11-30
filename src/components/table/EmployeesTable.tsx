import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks';
import { User } from '../../types/types';
import PreTBody from './TBody/PreTBody';
import TFoot from './TFoot/TFoot';
import THead from './THead/THead';
import EmployeesTableButtons from './EmployeesTableButtons';

const EmployeesTable = () => {

    const user = useAppSelector<User[]>(state => state.user);
    let keys: string[] = [];


    if (user.length > 0) {
        keys = Object.keys(user[0]);
    }

    const [countEmployeeNumber, setCountEmployeeNumber] = useState(0);
    const [countName, setCountName] = useState(0);
    const [countDateOfBirth, setCountDateOfBirth] = useState(0);
    const [countJobTitle, setCountJobTitle] = useState(0);
    const [countInArchive, setCountInArchive] = useState(0);

    const typesOfTD = [
        { type: 'Employee Number', count: countEmployeeNumber, itemKey: keys[0] },
        { type: 'Name', count: countName, itemKey: keys[1] },
        { type: 'Date Of Birth', count: countDateOfBirth, itemKey: keys[2] },
        { type: 'Tel.Num', itemKey: keys[3] },
        { type: 'Job Title', count: countJobTitle, itemKey: keys[4] },
        { type: 'In Archive', count: countInArchive, itemKey: keys[5] }]

    const handleClearAllCounts = () => {
        setCountDateOfBirth(0);
        setCountEmployeeNumber(0);
        setCountInArchive(0);
        setCountJobTitle(0);
        setCountName(0);
    }

    const handleSetCount = (type: string) => {
        switch (type) {
            case typesOfTD[0].type:
                setCountEmployeeNumber(prev => prev + 1)
                return countEmployeeNumber;
            case typesOfTD[1].type:
                setCountName(prev => prev + 1)
                return countName;
            case typesOfTD[2].type:
                setCountDateOfBirth(prev => prev + 1)
                return countDateOfBirth;
            case typesOfTD[4].type:
                setCountJobTitle(prev => prev + 1)
                return countJobTitle;
            case typesOfTD[5].type:
                setCountInArchive(prev => prev + 1)
                return countInArchive;
        }
    }

    return (
        <div className='pt-5'>
            <table className='pt-5 table text-center'>
                <THead items={typesOfTD} setCount={handleSetCount} deleteCountToAll={handleClearAllCounts} />
                <PreTBody users={user} />
                <TFoot values={typesOfTD} />
            </table>
            <EmployeesTableButtons />
        </div>
    )
}


export default EmployeesTable