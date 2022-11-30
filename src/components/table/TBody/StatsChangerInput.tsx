import React from 'react'

interface Props {
    value: string,
    handleChanger: (value: string) => void,
}

const StatsChangerInput = ({ value, handleChanger }: Props) => {

    return (
        <div>
            <input value={value}
                type={'text'}
                onChange={(e: any) => {
                    handleChanger(e)
                }}
            />
        </div>
    )
}


export default StatsChangerInput