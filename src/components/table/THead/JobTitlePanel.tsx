import React from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { closeJobTitleBar, setJobTitleFilter } from '../../../reducers/StatsChangerReducer';
const JobTitlePanel = () => {

    const titlesArr = ['Without Filters', 'Drivers', 'Managers', 'Salesmans'];

    const dispatch = useAppDispatch();

    return (
        <div className='jobTitlePanel'>
            {titlesArr.map(item => <p key={item}
                onClick={() => {
                    if (item === 'Without Filters') {
                        dispatch(setJobTitleFilter(null));
                    } else {
                        dispatch(setJobTitleFilter(item));
                    }
                    dispatch(closeJobTitleBar());
                }}
            >{item}</p>)}
        </div>
    )
}

export default JobTitlePanel