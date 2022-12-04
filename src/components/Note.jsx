const Note = ({ note, handleRemove }) => {

  return (
    <li>
      {note.content}
      <button
        className='remove'
        onClick={() => handleRemove(note.id)}>X</button>
    </li>
  )
}

export default Note;