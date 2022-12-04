import { useState } from 'react';
import { notesAPI } from '../API/api'

const NoteForm = ({ fetchData }) => {
  const [form, setForm] = useState({ content: "" });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }))
  }

  const handleAddNote = (event) => {
    event.preventDefault();

    const newNote = { content: form.content };
    postData(newNote);
    setForm({ content: "" });
  }

  const postData = async (note) => {
    await notesAPI.addNote(note);
    fetchData();
  }

  return (
    <form onSubmit={handleAddNote}>
      <div className='new-note'>
        <label forhtml="content">New Note</label>
        <textarea id="content" name="content" value={form.content} onChange={handleFormChange} required />
        <button>{'>'}</button>
      </div>
    </form>
  )
}

export default NoteForm;