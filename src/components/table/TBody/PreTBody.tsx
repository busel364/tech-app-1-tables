import React from 'react'
import { useAppSelector } from '../../../app/hooks'
import { User } from '../../../types/types'
import TBody from './TBody'

interface Props {
    users: User[]
}

const PreTBody = ({ users }: Props) => {

    const jobTitle = useAppSelector<null | string>(state => state.statsBar.jobTitle)

    return (
        <tbody className='tbody'>
            {users ?
                jobTitle === null ?
                    (users.filter(item => item.employeeNumber !== 0).map((item, index) => {
                        return <TBody item={item} key={`${item.dateOfBirth}+${item.name}`} index={index} />
                    })) :
                    (
                        users.filter(item => item.jobTitle === jobTitle).map((item, index) => {
                            return <TBody item={item} key={`${item.dateOfBirth}+${item.name}`} index={index} />
                        })
                    ) : null}
        </tbody>
    )
}

export default PreTBody