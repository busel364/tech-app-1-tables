import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './HomePage/Home'
import LoginPage from './Login-Register/LoginPage'
import Registration from './Login-Register/Registration'
import PreTables from './PreTables'
import EmployeesTable from './table/EmployeesTable'

const Main = () => {
    return (
        <div>
            <Routes>
                <Route
                    path='/'
                    element={<Home/>} />
                <Route
                path='new_table'
                element={<EmployeesTable/>}/>    
                <Route
                path='tables/*'
                element={<PreTables/>}/>
                <Route
                path='login'
                element={<LoginPage/>}/>
                <Route 
                path='registration'
                element={<Registration/>}/>
            </Routes>
        </div>
    )
}

export default Main