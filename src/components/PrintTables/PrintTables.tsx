import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { tableHeader } from '../../types/consts';
import { Tables } from '../../types/types'
import PrintTablesUsers from './PrintTablesUsers';

interface Props {
    item: Tables
    index: number
}

const PrintTables = ({ item, index }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className='divPrintTables'
                onClick={() => setIsOpen(prev => !prev)}>
                <p className=''>
                    {item.name}
                </p>
                <Link to={`${index}`}
                    className='link'>
                    <button className='buttonHome'>
                        Change Table
                    </button>
                </Link>
                <button className='deleteButton'
                >X</button>
            </div>
            {isOpen ? (
                <div>
                    <table className='divPrintTableTable'>
                        <thead>
                            <tr>
                                {tableHeader.map(item => <td key={`${item}`}>{item}</td>)}
                            </tr>
                        </thead>
                        <tbody>
                            {item.users?.map((item, index) => <PrintTablesUsers key={`${item}+${index}+33`} item={item} />)}
                        </tbody>
                    </table>
                </div>
            ) : null}
        </div>
    )
}

export default PrintTables