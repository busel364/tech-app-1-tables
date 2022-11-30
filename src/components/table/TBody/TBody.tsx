import React, { useEffect, useState } from 'react'
import { User } from '../../../types/types'
import TDValues from './TDValues'

interface Props {
  index: number,
  key: string,
  item: User
}

const TBody = ({ index, item }: Props) => {

  const [arrayOfUserValues,setArrayOfUserValues] = useState<any[]>([])

  let style = '';
  
  if (index % 2 === 0) {
    style = 'tr1of2';
  } else {
    style = 'tr2of2'
  }
  
  useEffect(()=>{
    setArrayOfUserValues(Object.entries(item));
  },[item])
  
  return (
    <tr className={style}>
      {arrayOfUserValues.filter(item=>item[0]!=='undefined').map((item,index)=><TDValues itemKey={item[0]} item={item[1]}  key={`${item[0]}+${index}`} id={arrayOfUserValues[0][1]}/>)}
    </tr>
  )
}

export default TBody