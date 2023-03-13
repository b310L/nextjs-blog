import React from 'react'

 const Task = ({task}) => {
    console.log('task '+task)
    
  return (
    <div className='Tasks'>
        {/* {task.map((tasks) => (
        <p className="user">{tasks}</p>
      ))} */}
    </div>
  )
}
export default  Task ;