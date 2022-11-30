import React from 'react'
import './App.css'
import { useAppDispatch } from './app/hooks'
import { closeJobTitleBar } from './reducers/StatsChangerReducer'
import PreMain from './components/PreMain'

const App = () => {

  const dispatch = useAppDispatch();

  return (
    <div>
      <div className='bigBack'
        onClick={() => dispatch(closeJobTitleBar())}></div>
      {/* <FilterNavBar/> */}
      <PreMain/>
      {/* <EmployeesTable /> */}
    </div>
  )
}

export default App