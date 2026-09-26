import React from 'react'

export const LargePerson = ({person}) => {
    const {name,age,hairColor,hobbies} = person;

  return (
    <div>
        <h3 className='font-bold'>{name}</h3>
        <p>Age: {age}</p>
        <p>Color: {hairColor}</p>
        <h3>Hobbies:</h3>
        <ul>
            {
                hobbies.map(hobbie =><li key={hobbie}>{hobbie   }</li>)
            }
        </ul>
    </div>
  )
}
