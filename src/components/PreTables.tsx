import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../app/hooks'
import PreEmployeesTable from './table/PreEmployeesTable';
import YourTables from './PrintTables/YourTables';

const PreTables = () => {

    const tables = useAppSelector(state=>state.tables);    

  return (
    <div>
        <Routes>
            <Route
            path='/'
            element={<YourTables/>}/>

            {tables.map((item,index)=><Route
            key={`${item.name}+${index}`}
            path={`${index}`}
            element={<PreEmployeesTable users={item.users!}/>}/>)}
        </Routes>
    </div>
  )
}

export default PreTables