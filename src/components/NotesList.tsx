import React from 'react'
import Note from './Note'

function NotesList() {

  const notes = [
    {id: 1,
       content: 'By groceries',
       author:{
      username: 'jad',
      profile:'./profile.png'
    }},
    {id: 2,
       content: 'Second note',
       author:{
      username: 'jad',
      profile:'./profile.png'
    }},
  ]


  return (
    <div className='NotesList'>
      {notes.map((note) => {
        return <Note note={note}/>
      })}
    </div>
  )
}

export default NotesList