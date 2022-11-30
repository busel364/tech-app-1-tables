import React from 'react'
import THeader from './THeader';

interface TypesOfTD {
    type: string;
    count?: number;
    itemKey: string
}

interface Props {
    items: TypesOfTD[],
    setCount: (type: string) => number | undefined,
    deleteCountToAll: () => void,
}

const THead = ({ items, deleteCountToAll, setCount }: Props) => {
    return (
        <thead>
            <tr className='row-cols-6'>
                {items.map(item => <THeader itemKey={item.itemKey} key={item.type} count={item.count} type={item.type} setCount={setCount} deleteCountToAll={deleteCountToAll} />)}
            </tr>
        </thead>
    )
}

export default THead