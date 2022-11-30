import React, { useEffect, useState } from 'react'
import { User } from '../../../types/types';

interface Props {
    type: string,
    itemKey: string,
    setEmployee: (value: User) => void
    item: User
}


const TFootInput = ({ itemKey, type, item, setEmployee }: Props) => {

    const [value, setValue] = useState<string | number>('');
    const [inArchiveValue, setInArchiveValue] = useState(true);
    const [isTrueValue, setIsTrueValue] = useState(false);
    const [isDelete, setIsDelete] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' || e.key === 'Delete') {
                setIsDelete(true);
            } else {
                setIsDelete(false);
            }
            if (e.key === 'Delete' || e.key === "Backspace" || e.key === '1' || e.key === '2' || e.key === '3' || e.key === '4' || e.key === '5' || e.key === '6' || e.key === '7' || e.key === '8' || e.key === '9' || e.key === '0') {
                setIsTrueValue(true)
            } else {
                setIsTrueValue(false);
            }

        })
    }, [])



    if (type === 'In Archive') {
        return (
            <td>
                <input className='checkbox' type={'checkbox'} checked={!inArchiveValue} onChange={() => {
                    setInArchiveValue(prev => !prev);
                    setEmployee({ ...item, inArchive: inArchiveValue })
                }} />
            </td>
        )
    }
    if (type === 'Date Of Birth') {
        return (
            <td>
                <input
                    placeholder={type}
                    value={value}
                    onChange={(e) => {
                        if (((e.target.value.length === 2 || e.target.value.length === 5) && !isDelete)) {
                            e.target.value += '.';
                        }
                        if (isTrueValue && e.target.value.length <= 10) {
                            setValue((e.target.value))
                            setEmployee({ ...item, [itemKey]: (e.target.value) })
                        }
                    }} />
            </td>
        )
    }

    if (type === 'Employee Number') {
        return (
            <td>
                <input
                    placeholder={type}
                    value={value as number}
                    onChange={(e) => {
                        if (isTrueValue) {
                            setValue((e.target.value) as unknown as number)
                            setEmployee({ ...item, [itemKey]: (e.target.value) as unknown as number })
                        }
                    }} />
            </td>
        )

    }
    if (type === 'Tel.Num') {
        return (
            <td>
                <form>
                    <input
                        className='telNumber'
                        type={'text'}
                        placeholder={'050-333-33-33'}
                        value={value}
                        onChange={(e) => {
                            if ((e.target.value.length === 3 || e.target.value.length === 7 || e.target.value.length === 10) && !isDelete) {
                                e.target.value += '-';
                            }
                            if (e.target.value.length <= 13) {
                                setValue(e.target.value.trim())
                                setEmployee({ ...item, [itemKey]: e.target.value.trim() })
                            }
                        }} />
                </form>
            </td>
        )
    }
    if (type === 'Job Title') {
        return (
            <td>
                <select value={value} onChange={(e) => {
                    if (e.target.value) {
                        setValue(e.target.value);
                        setEmployee({ ...item, [itemKey]: (e.target.value) })
                    }
                }}>
                    <option disabled></option>
                    <option>Driver</option>
                    <option>Manager</option>
                    <option>Salesman</option>
                </select>
            </td>
        )
    } else {
        return (
            <td>
                <input
                    placeholder={type}
                    value={value as string}
                    onChange={(e) => {
                        setValue(e.target.value.trim())
                        setEmployee({ ...item, [itemKey]: e.target.value.trim() })
                    }} />
            </td>
        )
    }
}

export default TFootInput