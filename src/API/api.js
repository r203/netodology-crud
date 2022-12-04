import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7777/notes',
});

export const notesAPI = {
  getNotes () {
    return instance.get(``,)
      .then(response => response.data)
  },

  addNote (content) {
    return instance.post(``, content)
    .then(response => response.data)
  },

  removeNote (noteId) {
    return instance.delete(`/${noteId}`)
    .then(response => response.data)
  },
}