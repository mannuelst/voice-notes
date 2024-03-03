import { ChangeEvent, useState } from 'react'
import logo from './assets/Logo.svg'
import { NewCard } from './components/new-note'
import { NoteCard } from './components/note-card'
interface Note {
  id: string,
  date: Date,
  content: string

}

function App() {
  const [search, setSearch] = useState('')
  const [notes, setNotes] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes')
    if (noteOnStorage) {
      return JSON.parse(noteOnStorage)
    }
    return []
  })
  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    }
    setNotes([newNote, ...notes])
    localStorage.setItem('notes', JSON.stringify([newNote, ...notes]))
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value
    setSearch(query)
  }

  const filterNotes = search !== '' ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) : notes
  return (
    <>
      <div className='mx-auto max-w-6xl my-12 space-y-6 '>
        <img src={logo} alt='nlw-expert' />
        <form className='w-full'>
          <input type="text" name="" id="" placeholder='Busque em suas notas...'
            className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
            onChange={handleSearch}
          />
        </form>
        <div className='h-px bg-slate-700' />
        <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
          <NewCard onNoteCreated={onNoteCreated} />
          {
            filterNotes.map(note => {
              return <NoteCard key={note.id} note={note} />
            })
          }
          {/* <NoteCard note={{ date: new Date(), content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }} /> */}
        </div>


      </div>

    </>
  )
}

export default App
