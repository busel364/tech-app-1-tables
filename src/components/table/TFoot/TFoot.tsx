import React, { useState } from 'react'
import { useAppDispatch } from '../../../app/hooks'
import { addEmployeeToArray } from '../../../reducers/UsersSlice'
import { arrOfTD, User } from '../../../types/types'
import TFootInput from './TFootInput'

interface Props {
    values: arrOfTD[]
}

const TFoot = ({ values }: Props) => {

    const [isClicked, setIsClicked] = useState(false);
    const [employee, setEmployee] = useState<User>({
        'employeeNumber': 0,
        'name': '',
        'dateOfBirth': 0,
        'telNumber': '',
        'jobTitle': '',
        'inArchive': false
    })

    const dispatch = useAppDispatch();

    return (

        !isClicked ? (
            <tfoot>
                <tr>
                    <td>
                        <button className='button mt-3'
                            onClick={() => setIsClicked(true)}
                        >Add Employee</button>
                    </td >
                </tr>
            </tfoot>
        ) : (
            <tfoot>
                <tr>
                    {values.map(item => <TFootInput
                        setEmployee={setEmployee}
                        item={employee}
                        key={item.type}
                        type={item.type}
                        itemKey={item.itemKey} />)}
                </tr>
                <tr>
                    <td>
                        <button className='button mt-3'
                            onClick={() => {
                                dispatch(addEmployeeToArray(employee))
                                setIsClicked(false)
                            }}>
                            Save
                        </button>
                    </td>
                    <td>
                        <button className='button mt-3'
                            onClick={() => setIsClicked(false)}>
                            Close
                        </button>
                    </td>
                </tr>
            </tfoot>
        )



    )
}

export default TFoot