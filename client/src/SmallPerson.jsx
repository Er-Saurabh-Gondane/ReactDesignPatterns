import React from 'react'

export const SmallPerson = ({person}) => {
  const  {name,age} = person;
  return (
    <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}
