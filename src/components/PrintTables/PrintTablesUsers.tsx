import React from 'react'
import { User } from '../../types/types'

interface Props {
    item: User
}

const PrintTablesUsers = ({ item }: Props) => {
    return (
        <tr>
            <td>{item.employeeNumber}</td>
            <td>{item.name}</td>
            <td>{item.dateOfBirth}</td>
            <td>{item.telNumber}</td>
            <td>{item.jobTitle}</td>
            <td>{item.inArchive ? 'In Archive' : 'Not in Archive'}</td>
        </tr>
    )
}

export default PrintTablesUsers