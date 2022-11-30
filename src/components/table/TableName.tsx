import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { appendTableToTablesArray } from '../../reducers/TablesArrayReducer';

interface Props {
    setIsClicked: (isClicked: boolean) => void
}

const TableName = ({ setIsClicked }: Props) => {
    const [tableName, setTableName] = useState('');
    const users = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    return (
        <div className='block'>
            <div className='bigDivTableName'
                onClick={() => setIsClicked(false)}></div>
            <div className='tableName'>
                <input className='inputTableName'
                    onChange={e => setTableName(e.target.value)}
                    placeholder='Table Name'
                />
                <button
                className='buttonHome'
                    onClick={()=>{
                        dispatch(appendTableToTablesArray({users,name:tableName}))
                        setIsClicked(false)
                    }}>Save</button>
            </div>
        </div>
    )
}

export default TableName