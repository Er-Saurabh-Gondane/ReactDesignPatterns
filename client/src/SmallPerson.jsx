import React from 'react'

export const SmallPerson = ({person}) => {
  const  {name,age} = person;
  return (
    <div className='flex gap-1'>
        <p><span className='font-bold'>Name:</span> {name}</p>
        <p><span className='font-bold'>Age:</span> {age}</p>
    </div>
  )
}
