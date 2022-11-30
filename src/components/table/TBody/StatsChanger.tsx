import React from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { updateUser } from '../../../reducers/UsersSlice'
import StatsChangerInput from './StatsChangerInput'

interface Props {
    value: string,
    id: number,
    handleChanger: (value: string) => void,
    closeBar: (value: boolean) => void,
    itemKey: string
}

const StatsChanger = ({ value, handleChanger, id, closeBar, itemKey }: Props) => {

    const dispatch = useAppDispatch();


    return (
        <div className=' statsChanger'>
            {itemKey === 'jobTitle' ?
                <td>
                    <select className='' value={value} onChange={(e) => {
                        dispatch(updateUser({ key: itemKey, id, value: e.target.value }))
                    }}>
                        <option>Driver</option>
                        <option>Manager</option>
                        <option>Salesman</option>
                    </select>
                </td> :
                (<StatsChangerInput value={value} handleChanger={handleChanger} />)}
            <div className='row-cols-2'>
                <button
                    onClick={() => {
                        dispatch(updateUser({ key: itemKey, id, value }))
                        closeBar(false)
                    }}>Save</button>
                <button onClick={() => closeBar(false)}>Close</button>
            </div>
        </div>
    )
}

export default StatsChanger