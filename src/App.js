
import './App.css';
import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';
import { notesAPI } from './API/api'

function App() {
  const [notes, setNotes] = useState([]);

  const fetchData = async () => {
    const data = await notesAPI.getNotes();
    setNotes(data)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Notes notes={notes} fetchData={fetchData}/>
      <NoteForm fetchData={fetchData}/>
    </div>
  );
}

export default App;
