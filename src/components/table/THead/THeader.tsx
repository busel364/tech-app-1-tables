import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { closeJobTitleBar, openJobTitleBar } from '../../../reducers/StatsChangerReducer'
import { sortEmployeeArray } from '../../../reducers/UsersSlice'
import JobTitlePanel from './JobTitlePanel'

interface Props {
    type: string,
    count?: number,
    setCount: (type: string) => number | undefined,
    deleteCountToAll: () => void,
    itemKey: string
}

const THeader = ({ type, count, itemKey, setCount, deleteCountToAll }: Props) => {

    const isOpen = useAppSelector<boolean>(state => state.statsBar.isOpen)
    const dispatch = useAppDispatch();

    if (type === 'Job Title') {
        return (
            <td className='tableHeader '>
                <button onClick={() => {
                    !isOpen?
                    dispatch(openJobTitleBar()):
                    dispatch(closeJobTitleBar())
                }}>{type}
                </button>
                {isOpen ? <JobTitlePanel /> : null}
            </td>
        )
    } else {
        return (
            <td className='tableHeader '>
                <button onClick={() => {
                    if (count === 0) {
                        deleteCountToAll();
                    }
                    dispatch(closeJobTitleBar())
                    setCount(type);
                    if (count) {
                        dispatch(sortEmployeeArray({ count, type: itemKey }))
                    }
                }}>{type}

                    {count ? (count! % 2 !== 0 && count !== 0 ?
                        <img className='arrowImg' src='https://cdn-icons-png.flaticon.com/16/25/25623.png' alt='arrowToDown' /> :
                        <img className='arrowImg' src='https://cdn-icons-png.flaticon.com/16/25/25223.png' alt='arrowToUp' />
                    ) : null}
                </button>
            </td>
        )
    }
}

export default THeader