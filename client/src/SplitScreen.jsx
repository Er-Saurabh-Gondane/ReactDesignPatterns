import React from 'react'

export const SplitScreen = ({left:Left,right:Right}) => {
  return (
    <div className='flex'>
        <div className='flex-1'>
            <Left/>
        </div>
        <div className='flex-4'>
            <Right/>
        </div>
    </div>
  )
}
