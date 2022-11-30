import React from 'react'
import { useAppSelector } from '../../app/hooks'
import PrintTables from './PrintTables'
import YourTablesButtons from './YourTablesButtons'

const YourTables = () => {

  const tables = useAppSelector(state => state.tables)
 
  let style = '';

  if (tables.length > 0) {
    style = 'btnYourTablesResponse';
    return (
      <div className='yourTablesReject yourTablesResponse text-center'>
        <p>Your tables</p>
        <div className='divOfTables'>
          {tables.map((item, index) => <PrintTables key={`${item.name}+${index}`} index={index} item={item} />)}
        </div>
        <YourTablesButtons customStyle={style} />
      </div>
    )
  } else {
    style = 'btnYourTablesReject';
    return (
      <div className='yourTablesReject text-center'>
        <p>Your table list is empty, but you can start with new Table</p>
        <YourTablesButtons customStyle={style} />
      </div>
    )
  }
}

export default YourTables