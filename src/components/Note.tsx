import React from 'react'

function Note({note}:{note:any}) {
  return (
    <div className='flex gap-5'>
    <div className='overflow-hidden h-16 w-16 rounded-full'>
      <img src={note.author.profile} alt="profile" />
    </div>
    <div>
      {note.content}
    </div>
    <div>
      <span>edit</span> 
      <br />
      <span>delete</span>
    </div>
    </div>
  )
}

export default Note