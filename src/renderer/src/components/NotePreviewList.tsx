import { notesMock } from '@/store/mocks'
const NotePreviewList = () => {
  return (
    <ul>
      {notesMock.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  )
}

export default NotePreviewList
