import Note from './Note';
import NoteTitle from './NoteTitle';
import { notesAPI } from '../API/api'

const Notes = ({notes, fetchData}) => {
  const handleRemove = async (noteId) => {
    await notesAPI.removeNote(noteId);
    fetchData();
  }

  return (
    <>
      <NoteTitle fetchData={fetchData}/>
      <ul>
        {
          notes.map(note => {
            return (
              <Note
                key={note.id}
                note={note}
                handleRemove={handleRemove}/>
            )
          })
        }
      </ul>
    </>
  )
}

export default Notes;