import React from 'react';
import './App.css';
import NotesList from './components/NotesList';
import AddNoteForm from './components/AddNoteForm';

function App() {



  return (
    <div className="App flex justify-center items-center h-screen gap-[44px] bg-[var(--accent-light)] "  >
      <NotesList />
      <AddNoteForm />
    </div>
  );
}

export default App;
