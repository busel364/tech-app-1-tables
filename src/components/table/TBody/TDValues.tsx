import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { removeEmployeeFromArray, updateUser } from '../../../reducers/UsersSlice';
import StatsChanger from './StatsChanger';

interface Props {
    item: string | boolean | number,
    id: number,
    itemKey: string
}

// create Select for Job title 

const TDValues = ({ item, id, itemKey }: Props) => {

    const [isClicked, setIsClicked] = useState(false);

    const [value, setValue] = useState<boolean | string | number>('');

    const dispatch = useAppDispatch();

    const handleChanger = (e: any) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setValue(item);
    }, [item])


    //itemKey!=='inArchive'
    if (itemKey !== 'inArchive') {
        return (
            <td>
                {isNaN(Number(item)) && itemKey !== 'dateOfBirth' ?
                    (!isClicked ? (
                        <p onClick={() => setIsClicked(true)}
                            className='mt-3 pt-2 TDvaluesP'>
                            {item}
                        </p>
                    ) :
                        <StatsChanger
                            value={(value) as string}
                            handleChanger={handleChanger}
                            id={id}
                            closeBar={setIsClicked}
                            itemKey={itemKey} />
                    ) :
                    (
                        <p className='mt-3 pt-2 TDvaluesP'>
                            {item}
                        </p>
                    )
                }
            </td>
        )
    } else {
        return (
            < td >
                <input className='checkbox' type={'checkbox'} checked={(value) as boolean} onChange={(e) => {
                    dispatch(updateUser({ key: itemKey, id, value: !value }))
                }} />
                <button className='deleteButton'
                    title='Delete Employee'
                    onClick={() => {
                        dispatch(removeEmployeeFromArray(id));
                    }}>X</button>
            </td >
        )
    }
}

export default TDValues